import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloater from '@/components/WhatsAppFloater';

export const metadata: Metadata = {
  title: 'GL Global | A brand of GL Exporters Pvt. Ltd. - Agricultural Sourcing & Export Office',
  description:
    'Dedicated Indian representative sourcing agent for export-grade coconut derivatives, low EC coco peat, and bold groundnuts. Complete lab testing, port logistics, and contract management.',
  metadataBase: new URL('https://glglobal.in'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={
        {
          '--font-montserrat': "'Montserrat', sans-serif",
          '--font-open-sans': "'Open Sans', sans-serif",
        } as React.CSSProperties
      }
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased min-h-screen bg-slate-50 text-slate-800 flex flex-col text-[15px] leading-relaxed"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloater />
      </body>
    </html>
  );
}