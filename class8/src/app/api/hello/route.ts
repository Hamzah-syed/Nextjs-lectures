import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    let data = { name: "okasha", age: 20, job: "developer" }
    return NextResponse.json({ message: "Api successful", data })
}