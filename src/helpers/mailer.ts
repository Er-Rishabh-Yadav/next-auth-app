import nodemailer from 'nodemailer';
import User from '@/models/userModels';
import bcryptjs from 'bcryptjs';

export const sendMail = async ({email,emailType,userId}:any) => {
  try{
       //create hash token
       const hashValue =  await bcryptjs.hash(userId.toString(), 10);

       if(emailType === "VERIFY"){
        await User.findByIdAndUpdate(userId,{verifyToken:hashValue,verifyTokenExpire:Date.now() + 3600000});
       
       }
       else if(emailType === "RESET"){
        await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashValue,forgotPasswordExpire:Date.now() + 3600000});
       
       }
       var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAPUSER,
          pass: process.env.MAILTRAPPASS
        }
      });
        const mailOptions = {
            from:'ADMIN@gmail.com',
            to:email,
            subject:emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html:
            `<p>
            <a href= ${emailType==="VERIFY"?`${process.env.DOMAIN}/verifyemail?token=${hashValue}`:`${process.env.DOMAIN}/forgotpassword?token=${hashValue}`}>Click here to ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"}</a>

           ${emailType==="VERIFY"?`${process.env.DOMAIN}/verifyemail?token=${hashValue}`:`${process.env.DOMAIN}/forgotpassword?token=${hashValue}`} 
            </p>`
        }
        const mailresponse = await transport.sendMail(mailOptions)
        return mailresponse;

  }
    catch(err:any){
        throw new Error("Mailer Error ->"+err.message);
    }
}
