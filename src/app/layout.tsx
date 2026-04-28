import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import dynamic from "next/dynamic";
import { TokenProvider } from "../context/SaveToken";
import { CartProvider } from './../context/Cart';
import { WishProvider } from './../context/wishlist';
import { CompareProvider } from '../context/CompareContext';
import Hadder from '../components/component/navigation/Hadder';
import { Toaster } from 'sonner';
import type { ReactNode } from "react";

const Footer = dynamic(() => import('../components/component/Footer/Footer'), {
  ssr: false,
  loading: () => null,
});

const FooterTop = dynamic(() => import('../components/component/Footer/FooterTop'), {
  ssr: false,
  loading: () => null,
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shop So3 Online Store - Find The Best Deals",
  description: "Shop So3 Online Store Your Ultimate Destination for Quality Products at Competitive Prices. Explore a wide range of items, from electronics to fashion and home essentials, all curated to meet your daily needs. With seamless browsing, secure payment options, and fast shipping, Shop So3 is dedicated to providing a top-notch online shopping experience.",
  keywords: ["e-commerce", "online shopping", "electronics", "fashion", "Shop So3"],
  openGraph: {
    title: "Shop So3 Online Store - Quality Products",
    description: "Your Ultimate Destination for Quality Products at Competitive Prices.",
    url: "https://e-commerce-feor.vercel.app",
    siteName: "Shop So3",
    images: [
      {
        url: "https://e-commerce-feor.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shop So3 - Storefront",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop So3 Online Store",
    description: "Your Ultimate Destination for Quality Products at Competitive Prices.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/path/to/font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable ?? undefined)}>
          <TokenProvider>
            <CartProvider>
              <WishProvider>
                <CompareProvider>
                  <Hadder />
                  {children}
                  <Toaster richColors duration={1500} />
                  <FooterTop />
                  <Footer />
                </CompareProvider>
              </WishProvider>
            </CartProvider>
          </TokenProvider>
      </body>
    </html>
  );
}