import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/cart', '/allorders', '/wishlist', '/Checkout', '/stripe',];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const cookie = req.cookies.get('userToken')?.value;

  // 4. Redirect
  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}