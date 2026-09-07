import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://nexoreya.com'),
  title: { default: 'Nexoreya — AI-Powered Growth & Digital Transformation', template: '%s — Nexoreya' },
  description: 'Nexoreya engineers growth by connecting strategy, AI, technology and execution into systems built for measurable business outcomes.',
  openGraph: { title: 'Nexoreya — AI-Powered Growth & Digital Transformation', description: 'Engineering growth by connecting strategy, AI, technology and execution.', type: 'website', siteName: 'Nexoreya' },
  twitter: { card: 'summary_large_image', title: 'Nexoreya — Growth, Engineered.', description: 'AI-powered growth & digital transformation.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${manrope.variable}`}>{children}</body></html>;
}
