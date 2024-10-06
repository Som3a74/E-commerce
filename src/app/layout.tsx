import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from '../components/component/Footer/Footer';
import Hadder from '../components/component/navigation/Hadder';
import FooterTop from './../components/component/Footer/FooterTop';
import { TokenProvider } from "../context/SaveToken";
import { CartProvider } from './../context/Cart';
import { WishProvider } from './../context/wishlist';
import { Toaster } from 'sonner'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Shop So3 Online Store",
  description: "Shop So3 Online Store Your Ultimate Destination for Quality Products at Competitive Prices. Explore a wide range of items, from electronics to fashion and home essentials, all curated to meet your daily needs. With seamless browsing, secure payment options, and fast shipping, Shop So3 is dedicated to providing a top-notch online shopping experience. Whether you're looking for the latest tech gadgets or trendy clothing, we’ve got you covered. Shop today and enjoy exceptional customer service, easy returns, and unbeatable deals, exclusively at Shop So3 Online Store!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
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
      </body>
    </html>
  );
}