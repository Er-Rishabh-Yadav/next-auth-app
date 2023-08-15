"use client";

import axios from "axios";
import React,{useState,useEffect} from "react";
import {useRouter} from "next/navigation";
import { toast } from "react-hot-toast";
import Footer from "@/component/footer";
export default function ResetPassword() {
    const [error,setError] = useState(false);
    const [token,setToken] = useState("");
    const [verified,setVerified] = useState(false);
    const [password,setPassword] = useState("");
    const router = useRouter();
    const resetPassword = async () => {
        try {
             await axios.post("/api/users/resetpassword",{token,password});

             router.push("/login")
             toast.success("Password Reset Successfull")

        } catch(error:any) {
            setError(true)
            console.log(error.response.data);
        }
    }
    const verifyToken = async () => {
        try {
            await axios.post('/api/users/verifyforgotpasswordtoken', {token})
            toast.success("Token Verified")
            setVerified(true)
        } catch (error: any) {
            setError(true)
            console.log(error.response.data)
        }
    }
    useEffect(() => {
        const url = window.location.search.split("=")[1];
        setToken(url||"");
    },[]);
    useEffect(() => {
        if(token.length > 0) verifyToken();
    },[token]);

    return (
        <div className="flex  flex-col items-center justify-center min-h-screen bg-slate-800 py-2">
            
            <div className="bg-gray-500 p-4 rounded items-center justify-center text-white">
                
            <h1 className="text-2xl text-center font-bold text-yellow-500 p-2">Reset Password Page</h1>
            <h2 className="text-lg bg-gray-200 text-gray-400 text-center  m-4 p-2">{token ?`${token}`:"Token not Found."}</h2>

            {error && <p className="bg-red-500 font-bold text-white p-2 rounded-full">There was an error in reseting password</p>}
            {verified &&
             <div className="flex flex-col justify-center items-center">

                <div className="flex flex-row justify-center items-center">
                    <label className="p-3" htmlFor="Password">Password :</label>
                    <input className="p-2 rounded text-black" type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                </div>
                    <button className="bg-slate-600 hover:bg-green-500 p-2 m-4 border-slate-300" onClick={resetPassword}>Reset Password</button>                
            </div>
                }
            </div>
            <Footer/>
        </div>

        
    );
}