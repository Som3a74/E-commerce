import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("userToken");
  let url = req.url
  // console.log(verify)

  if (!verify && url.includes('/cart')) {
    return NextResponse.redirect("http://localhost:3000/register");
  }

  // if (verify && url === "http://localhost:3000/") {
  //   return NextResponse.redirect("http://localhost:3000/dashboard");
  // }
}