import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isPublic = path === '/login' || path === '/signup' || path==='/verifyemail'
    // const isPrivate =  path === '/profile/:id'
    const token = request.cookies.get('token')?.value || ''
    // console.log(token+" "+isPublic)
    // console.log(request.cookies)
    if(path==='/profile/:id*' && token){
        return NextResponse.redirect(new URL('/profile/:id', request.url))
    }
    // if you have token no need to go to any public page
    if(isPublic && token){
        return NextResponse.redirect(new URL('/', request.url))
    }

    if(!isPublic && !token){
        return NextResponse.redirect(new URL('/login', request.url))
    }


}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/about',
    '/profile/:id*',
    '/verifyemail'
    ]
}