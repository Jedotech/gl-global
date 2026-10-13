import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloater from '@/components/WhatsAppFloater';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

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
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
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