import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function adminMiddleware(request: NextRequest) {

  const session = await getToken({req: request, secret: process.env.NEXTAUTH_SECRET})
  if(session?.email === 'dolle.mickael@gmail.com') {
    return NextResponse.next()
  }
  
  return NextResponse.redirect(new URL('/', request.url))
}