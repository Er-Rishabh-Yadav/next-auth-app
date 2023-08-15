"use client";

import axios from "axios";
import Link from "next/link";
import React,{useState,useEffect} from "react";

export default function VerifyEmailPage() {
    const [error,setError] = useState(false);
    const [token,setToken] = useState("");
    const [verified,setVerified] = useState(false);
    const verifyUserEmail = async () => {
        try {
             await axios.post("/api/users/verfiyemail",{token});
           
                setVerified(true);
            
        } catch(error:any) {
            console.log(error);
            setError(true);
        }
    }
    useEffect(() => {
        const url = window.location.search.split("=")[1];
        setToken(url||"");
    },[]);
    useEffect(() => {
        if(token.length > 0) verifyUserEmail();
    },[token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 text-white py-2">
            <div className="bg-gray-500 p-4 rounded">

            <div className="flex flex-col text-2xl justify-center items-center text-center font-bold text-yellow-500 tracking-wider uppercase">
            <h1 className="inline-block p-4">Verify Email</h1>
            </div>
            <h2 className="text-gray-400 text-center bg-slate-200 p-1 m-4">{token ?`${token}`:"no token"}</h2>

            {error && <p className="bg-red-500 m-5 p-4 rounded font-bold text-xl text-center">There was an error verifying your email</p>}
            {verified && <p className="bg-green-500 m-5 p-4 rounded font-bold text-xl text-center">Your email has been verified</p>}
            </div>
        </div>
    );
}