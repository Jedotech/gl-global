interface KVNamespace {
  get(
    key: string,
    options?: { type?: 'text' | 'arrayBuffer' }
  ): Promise<string | ArrayBuffer | null>;
}

interface Env {
  RATES_KV?: KVNamespace;
}

export const onRequestGet = async (context: { request: Request; env: Env }) => {
  const url = new URL(context.request.url);
  const id = url.searchParams.get('id');

  if (!id || !context.env.RATES_KV) {
    return new Response('PDF not found.', { status: 404 });
  }

  const pdfBuffer = await context.env.RATES_KV.get(`pdf_${id}`, {
    type: 'arrayBuffer',
  });

  if (!pdfBuffer) {
    return new Response('No Lab Test PDF uploaded for this commodity yet.', {
      status: 404,
    });
  }

  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="GL-Global-Lab-Spec-${id}.pdf"`,
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
};