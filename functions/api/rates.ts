interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string | ArrayBuffer): Promise<void>;
  delete(key: string): Promise<void>;
}

interface Env {
  BUYER_ACCESS_CODES?: string;
  ADMIN_ACCESS_CODE?: string;
  RATES_KV?: KVNamespace;
}

export interface RateItem {
  id: string;
  product: string;
  category: 'Spices' | 'Rice' | 'Groundnut' | 'Coconut' | 'Cookware';
  hsnCode?: string;
  varietyOrigin: string;
  grade: string;
  moq: string;
  exFactoryUsd: number;
  gst: string;
  packingLine1: string;
  packingLine2: string;
  labTestUrl: string;
  labTestFileName?: string;
  certificates?: string[];
  publishedOn: string;
  validThrough: string;
}

const DEFAULT_RATES: RateItem[] = [
  {
    id: 'r1',
    product: 'Red Chilli Whole',
    category: 'Spices',
    hsnCode: '09042110',
    varietyOrigin: 'Guntur',
    grade: 'BEST - Stemless',
    moq: '1 MT',
    exFactoryUsd: 3844.0,
    gst: '5% + Any added cost',
    packingLine1: 'Plain PP woven bag -',
    packingLine2: '(Non Printed)',
    labTestUrl: '#',
    certificates: [
      'FSSAI licence',
      'Spices Board registration',
      'Food-safety certification',
      'Halal certificate',
    ],
    publishedOn: '22-Nov-2026',
    validThrough: '28-Nov-2026',
  },
];

const KV_KEY = 'live_rates_catalogue_v1';

async function getLiveUsdToInr(): Promise<{ rate: number | null; date: string }> {
  // Primary free FX source: open.er-api.com
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      cf: { cacheTtl: 1800, cacheEverything: true },
    } as RequestInit);
    if (res.ok) {
      const data = (await res.json()) as {
        rates?: { INR?: number };
        time_last_update_utc?: string;
      };
      if (data?.rates?.INR) {
        const rawDate = data.time_last_update_utc
          ? new Date(data.time_last_update_utc).toISOString().slice(0, 10)
          : new Date().toISOString().slice(0, 10);
        return { rate: Number(data.rates.INR), date: rawDate };
      }
    }
  } catch {
    // Fall through to secondary FX source
  }

  // Secondary free FX source: Frankfurter (ECB)
  try {
    const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=INR');
    if (res.ok) {
      const data = (await res.json()) as {
        rates?: { INR?: number };
        date?: string;
      };
      if (data?.rates?.INR) {
        return {
          rate: Number(data.rates.INR),
          date: data.date || new Date().toISOString().slice(0, 10),
        };
      }
    }
  } catch {
    // Ignore if unavailable
  }

  return { rate: null, date: '' };
}

async function getRates(env: Env): Promise<RateItem[]> {
  if (env.RATES_KV) {
    const stored = await env.RATES_KV.get(KV_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as RateItem[];
      } catch {
        return DEFAULT_RATES;
      }
    }
  }
  return DEFAULT_RATES;
}

function checkRole(code: string, env: Env): 'admin' | 'buyer' | null {
  const submitted = (code || '').trim().toUpperCase();
  if (!submitted) return null;

  const adminCode = (env.ADMIN_ACCESS_CODE || 'GL-ADMIN-2026').trim().toUpperCase();
  if (submitted === adminCode) return 'admin';

  const buyerCodes = (env.BUYER_ACCESS_CODES || 'GL-BUYER-2026')
    .split(',')
    .map((c) => c.trim().toUpperCase())
    .filter(Boolean);

  if (buyerCodes.includes(submitted)) return 'buyer';
  return null;
}

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

// POST: Authenticate Buyer or Admin & Fetch Catalogue + Live USD->INR Rate
export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const body = (await context.request.json()) as { accessCode?: string };
    const role = checkRole(body.accessCode || '', context.env);

    if (!role) {
      return new Response(
        JSON.stringify({
          error:
            'Invalid or expired Access Code. Request access via WhatsApp or Request Quote.',
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const [rates, fx] = await Promise.all([
      getRates(context.env),
      getLiveUsdToInr(),
    ]);

    return new Response(
      JSON.stringify({
        rates,
        role,
        usdToInr: fx.rate,
        fxDate: fx.date,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request payload.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// PUT: Admin Add or Update a Rate Template Row (+ Optional PDF Upload)
export const onRequestPut = async (context: { request: Request; env: Env }) => {
  try {
    const body = (await context.request.json()) as {
      accessCode?: string;
      item?: RateItem;
      pdfBase64?: string;
      pdfFileName?: string;
    };

    if (checkRole(body.accessCode || '', context.env) !== 'admin') {
      return new Response(
        JSON.stringify({ error: 'Unauthorized: Admin access required.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!context.env.RATES_KV) {
      return new Response(
        JSON.stringify({
          error:
            'Cloudflare KV binding "RATES_KV" is not configured yet. Bind RATES_KV in Cloudflare Pages Settings.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!body.item) {
      return new Response(
        JSON.stringify({ error: 'Missing rate item data.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const currentRates = await getRates(context.env);
    const itemId = body.item.id || `r_${Date.now()}`;
    const incoming: RateItem = { ...body.item, id: itemId };

    if (body.pdfBase64) {
      const buffer = base64ToArrayBuffer(body.pdfBase64);
      await context.env.RATES_KV.put(`pdf_${itemId}`, buffer);
      incoming.labTestUrl = `/api/rates/pdf?id=${encodeURIComponent(itemId)}&v=${Date.now()}`;
      incoming.labTestFileName = body.pdfFileName || 'Lab-Report.pdf';
    }

    const existingIndex = currentRates.findIndex((r) => r.id === itemId);
    let updatedRates: RateItem[];

    if (existingIndex >= 0) {
      updatedRates = [...currentRates];
      updatedRates[existingIndex] = incoming;
    } else {
      updatedRates = [incoming, ...currentRates];
    }

    await context.env.RATES_KV.put(KV_KEY, JSON.stringify(updatedRates));

    return new Response(JSON.stringify({ rates: updatedRates }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to save rate item or PDF.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// DELETE: Admin Remove a Rate Template Row & Its Stored PDF
export const onRequestDelete = async (context: { request: Request; env: Env }) => {
  try {
    const body = (await context.request.json()) as {
      accessCode?: string;
      id?: string;
    };

    if (checkRole(body.accessCode || '', context.env) !== 'admin') {
      return new Response(
        JSON.stringify({ error: 'Unauthorized: Admin access required.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!context.env.RATES_KV) {
      return new Response(
        JSON.stringify({
          error:
            'Cloudflare KV binding "RATES_KV" is not configured yet. Bind RATES_KV in Cloudflare Pages Settings.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const currentRates = await getRates(context.env);
    const updatedRates = currentRates.filter((r) => r.id !== body.id);

    await context.env.RATES_KV.put(KV_KEY, JSON.stringify(updatedRates));
    if (body.id) {
      await context.env.RATES_KV.delete(`pdf_${body.id}`);
    }

    return new Response(JSON.stringify({ rates: updatedRates }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to delete rate item.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};