import type { NextRequest } from 'next/server'
import { adminMiddleware } from './middlewares/admin.middleware'
 
export function middleware(request: NextRequest) {
  /**
   * ROUTE /admin
   */
  if(request.nextUrl.pathname.startsWith('/admin')) {
    return adminMiddleware(request)
  }
}

 export const config = {
  matcher: ['/admin/:path*'],
}