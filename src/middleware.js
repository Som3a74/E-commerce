import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("userToken");
  let url = req.url
  
  // console.log(!verify === false)
  // console.log("url == " + url.includes('cart'))

  if (!verify) {
    if (url.includes('/wishlist') ||  url.includes('/cart') ||  url.includes('/allorders')) {
      console.log('donnnnnnnnnnnnnnnnne');
      return NextResponse.redirect("http://localhost:3000/login");
    }
  }

}