import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";


export async function POST(request: NextRequest) {
    let body = await request.json()

    let email = "abc@gmail.com"
    let pass = '12345'

    if (body.email !== email || body.pass !== pass) {
        return NextResponse.json({ message: "Invalid email or password" })
    }


    const secret = new TextEncoder().encode(
        '123456'
    );

    const jwt = await new jose.SignJWT({ email: body.email })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(secret);

    // console.log(jwt);


    console.log(body);
    return NextResponse.json({ jwt })
}