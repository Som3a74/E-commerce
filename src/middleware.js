import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("userToken");
  let url = req.url
  
  if (!verify) {
    if (url.includes('/wishlist') ||  url.includes('/cart') ||  url.includes('/allorders') ||  url.includes('/Checkout') ||  url.includes('/stripe')) {
      console.log('donnnnnnnnnnnnnnnnne');
      return NextResponse.redirect("/login");
    }
  }
}