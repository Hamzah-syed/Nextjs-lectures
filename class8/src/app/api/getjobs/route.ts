import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    let jobs = [
        { id: 1, title: "developer", company: "google" },
        { id: 2, title: "designer", company: "facebook" },
        { id: 3, title: "manager", company: "amazon" },
        { id: 4, title: "tester", company: "microsoft" },
        { id: 5, title: "accountant", company: "apple" }
    ]

    return NextResponse.json({ message: "Api successful", data: jobs })
}