interface Env {
  BUYER_ACCESS_CODES?: string;
}

const RATE_CATALOGUE = [
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

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const body = (await context.request.json()) as { accessCode?: string };
    const submittedCode = (body.accessCode || '').trim().toUpperCase();

    if (!submittedCode) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid Buyer Access Code.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Read comma-separated valid codes from Cloudflare Pages Environment Variables
    // Fallback code 'GL-BUYER-2026' works until you set BUYER_ACCESS_CODES in Cloudflare
    const rawCodes = context.env.BUYER_ACCESS_CODES || 'GL-BUYER-2026';
    const validCodes = rawCodes
      .split(',')
      .map((c) => c.trim().toUpperCase())
      .filter(Boolean);

    if (!validCodes.includes(submittedCode)) {
      return new Response(
        JSON.stringify({
          error:
            'Invalid or expired Buyer Access Code. Request access via WhatsApp or Request Quote.',
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ rates: RATE_CATALOGUE }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request payload.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};