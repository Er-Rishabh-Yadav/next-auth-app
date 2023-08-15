import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {token,password} = reqBody;
        console.log(token);
        const user = await User.findOne({forgotPasswordToken:token,forgotPasswordExpire:{$gt:Date.now()}})
        // console.log(user);
        if(!user){
            return NextResponse.json({error:"Reset password Invalid token or token expired"},{status:400})
        }
        console.log(user);
        
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        user.password = hashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpire = undefined;

        await user.save();
        return NextResponse.json({message:"Password updated successfully",success:true},{status:200})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
        
    
}