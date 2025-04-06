import { NextResponse } from "next/server";

export async function GET(req){

    console.log(req.nextUrl.pathname)
    const data = req.nextUrl.searchParams
    console.log(data.name)
    
    return  NextResponse.json({msg:req.method})
}