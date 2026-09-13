import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://redwoodcoffee.com'),
  title: 'Redwood Coffee — Coffee Worth Waking Up For',
  description:
    'Premium craft coffee from Redwood Coffee. Explore our menu, build your own blend, and discover ethically sourced, freshly roasted coffee.',
  openGraph: {
    title: 'Redwood Coffee — Coffee Worth Waking Up For',
    description:
      'Premium craft coffee from Redwood Coffee. Explore our menu, build your own blend, and discover ethically sourced, freshly roasted coffee.',
    images: [
      {
        url: 'https://images.pexels.com/photos/35518412/pexels-photo-35518412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://images.pexels.com/photos/35518412/pexels-photo-35518412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
