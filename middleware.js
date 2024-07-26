import { NextResponse } from "next/server";

//A middleware to intercept some sever request, then grant or reject 
export function middleware(request) {
    // console.log(request);
    return NextResponse.next();
}


// A config file that tell which activity triggers the middleware
export const config = {
    matcher: '/news'
}