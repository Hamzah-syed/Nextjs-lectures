import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
    let isLoggedIn = true;
    const path = request.nextUrl.pathname // /dashboard
    if (path === '/dashboard' && !isLoggedIn) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    else if(path==='/login' && isLoggedIn){
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    else {
        return NextResponse.next()
    }



    // const url = new URL('/login', request.url)
    // return NextResponse.redirect(url)
}