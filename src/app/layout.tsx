import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import dynamic from "next/dynamic";
import { TokenProvider } from "../context/SaveToken";
import { CartProvider } from './../context/Cart';
import { WishProvider } from './../context/wishlist';
import Hadder from '../components/component/navigation/Hadder';
import { Toaster } from 'sonner';
import Head from "next/head";
import Script from "next/script";
import type { ReactNode } from "react";

const Footer = dynamic(() => import('../components/component/Footer/Footer'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const FooterTop = dynamic(() => import('../components/component/Footer/FooterTop'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shop So3 Online Store",
  description: "Shop So3 Online Store Your Ultimate Destination for Quality Products at Competitive Prices. Explore a wide range of items, from electronics to fashion and home essentials, all curated to meet your daily needs. With seamless browsing, secure payment options, and fast shipping, Shop So3 is dedicated to providing a top-notch online shopping experience.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description ?? "Default description"} />
        <title>{String(metadata.title ?? "Default title")}</title>
        <link rel="preload" href="/path/to/font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable ?? undefined)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TokenProvider>
            <CartProvider>
              <WishProvider>
                <Hadder />
                {children}
                <Toaster richColors duration={1500} />
                <FooterTop />
                <Footer />
              </WishProvider>
            </CartProvider>
          </TokenProvider>
        </ThemeProvider>

        <Script src="https://e-commerce-feor.vercel.app/_next/static/chunks/23-014408e0d92be2be.js" type="module" strategy="lazyOnload" />
        <Script src="https://e-commerce-feor.vercel.app/_next/static/chunks/23-014408e0d92be2be-legacy.js" noModule strategy="lazyOnload" />
        <Script src="https://e-commerce-feor.vercel.app/_next/static/chunks/532-8f64baec84b3da4f.js" type="module" strategy="lazyOnload" />
        <Script src="https://e-commerce-feor.vercel.app/_next/static/chunks/532-8f64baec84b3da4f-legacy.js" noModule strategy="lazyOnload" />
      </body>
    </html>
  );
}