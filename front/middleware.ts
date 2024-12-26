import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';


// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/signup', '/'];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  
  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value;
    // console.log(cookie)
  // 4. Redirect
  if (isProtectedRoute && !cookie) {
    
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if (
    isPublicRoute &&
    cookie&&
    !req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  return NextResponse.next();
}
