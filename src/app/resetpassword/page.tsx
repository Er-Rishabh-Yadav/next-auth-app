"use client";
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter} from "next/navigation"
import axios from "axios"
import toast ,{ Toaster,ToastBar}from "react-hot-toast";
import Footer from "@/component/footer";


export default function ForgotPassword() {
    const router = useRouter()
   
    const [email, setEmail] = React.useState("")
    const [button, setButton] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const onReset = async () => {
       

            setLoading(true)
            await axios.post("/api/users/forgotpassword",{email}).then((res) => {
                console.log(res.data)
                router.push("/login")
                toast.success("Reset Password Link Sent to your Email")
                
            }).catch((err) => {
                console.log(err.response.data.error)
                toast.error(err.response.data.error)
            })
            .finally(() => {
            setLoading(false)
            })
    
}
    useEffect(() => {
        if(email.length>0 ){
            setButton(false)}
        else{
            setButton(true)
        }
    })
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 py-2">
            <div className="bg-gray-500 p-4 rounded items-center justify-center text-white">

            <h1 className="fixed text-2xl  tracking-wider left-0 top-0 flex w-full justify-center border-b font-bold text-yellow-500 border-slate-300   pb-6 pt-8  uppercase ">{loading ? "Processing" : "Reset Password"}</h1>
            
            <div className="flex flex-row justify-center items-center">

            <label className="p-3" htmlFor="email">Email : </label>
            <input className="p-2 border rounded-xl border-gray-300" type="text" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
            </div>
            
            <div className="flex flex-row justify-center items-center">

            <button className="p-2 border border-gray-300 rounded-lg m-4 focus:outline-none focus:border-gray-400 hover:bg-green-600" onClick={onReset}>
                {button ? "Please fill all the fields" : "Reset Password"}
            </button>
            </div>

            <div className="flex flex-row justify-center items-center">
                
            <Link className="text-blue-700" href="/signup">Visit Signup Page?</Link>
            <span className="m-1"> | </span>
            <Link className="text-blue-700" href="/login">Login</Link>
            </div>
        </div>
            <Toaster>
                {(t) => (
                    <ToastBar
                    toast={t}
                    style={{
                        ...t.style,
                        animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
                    }}
                    />
                )}
            </Toaster>
            
        <Footer/>
        </div>
    );
}