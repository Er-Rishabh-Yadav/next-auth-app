import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendMail } from "@/helpers/mailer";


connect()

export async function POST(request: NextRequest){
    try{
        const reqbody = await request.json()
        const {email} = reqbody
        console.log(reqbody);
        console.log( email)
        if( !email){
            return NextResponse.json({error: "Please fill all the fields"}, {status: 400})
        }
        else{
            const user = await User.findOne({email: email});
            if(!user){
                return NextResponse.json({error: "User Not exists"}, {status: 400})
            }
            //forgot password token send to mail
            
            console.log("From Reset Api",user._id)
             await sendMail({email: email, emailType: "RESET", userId: user._id})
            return NextResponse.json({message: "Mail send successfully",success: true, user}, {status: 200});
        }
    }
    catch(error:any){
        console.log(error)
        return NextResponse.json({error: error.message},{status : 500})
    }
}