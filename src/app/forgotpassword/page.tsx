"use client";

import axios from "axios";
import { verify } from "crypto";
import { set } from "mongoose";
import Link from "next/link";
import React,{useState,useEffect} from "react";
import {useRouter} from "next/navigation";
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
             

        } catch(error:any) {
            setError(true)
            console.log(error.response.data);
        }
    }
    const verifyToken = async () => {
        try {
            await axios.post('/api/users/verifyforgotpasswordtoken', {token})
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
        <div className="">
            <h1>Reset Password Page</h1>
            <h2>{token ?`${token}`:"no token"}</h2>

            {error && <p>There was an error in reseting password</p>}
            {verified && 
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                    <button onClick={resetPassword}>Reset Password</button>                
                </div>}
        </div>
    );
}