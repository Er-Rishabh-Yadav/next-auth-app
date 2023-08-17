'use server'
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response =NextResponse.json(
            {
                message: "Logged out successfully",
                success: true
            },{status: 200});
        //clearing the token

        //delete token from cookie

        response.cookies.delete('token')
        response.cookies.set('token', "", {httpOnly: true,expires: new Date(0),domain:process.env.NODE_ENV==='development'?'.localhost':'.next-auth-app-iota.vercel.app'});
        return response;
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status : 500})
    }
        
    }
