// import type { Metadata } from "next";
// import { Inter as FontSans } from "next/font/google"
// import { cn } from "@/lib/utils"
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider"
// import Footer from '../components/component/Footer/Footer';
// import Hadder from '../components/component/navigation/Hadder';
// import FooterTop from './../components/component/Footer/FooterTop';
// import { TokenProvider } from "../context/SaveToken";
// import { CartProvider } from './../context/Cart';
// import { WishProvider } from './../context/wishlist';
// import { Toaster } from 'sonner'

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
// export const metadata: Metadata = {
//   title: "Shop So3 Online Store",
//   description: "Shop So3 Online Store Your Ultimate Destination for Quality Products at Competitive Prices. Explore a wide range of items, from electronics to fashion and home essentials, all curated to meet your daily needs. With seamless browsing, secure payment options, and fast shipping, Shop So3 is dedicated to providing a top-notch online shopping experience. Whether you're looking for the latest tech gadgets or trendy clothing, we’ve got you covered. Shop today and enjoy exceptional customer service, easy returns, and unbeatable deals, exclusively at Shop So3 Online Store!",
// };

// export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
//   return (
//     <html lang="en">
//       <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
//           <TokenProvider>
//             <CartProvider>
//               <WishProvider>
//                 <Hadder />
//                 {children}
//                 <Toaster richColors duration={1500} />
//                 <FooterTop />
//                 <Footer />
//               </WishProvider>
//             </CartProvider>
//           </TokenProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

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
import type { ReactNode } from "react";

const Footer = dynamic(() => import('../components/component/Footer/Footer'), {
  ssr: false,
  loading: () => <div>Loading...</div>, // Optional loading state
});

const FooterTop = dynamic(() => import('../components/component/Footer/FooterTop'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

// const Hadder = dynamic(() => import('../components/component/navigation/Hadder'), {
//   ssr: false,
// });

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
      </body>
    </html>
  );
}