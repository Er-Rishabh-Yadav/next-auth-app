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
        <div className="">
            <h1>Verify Email</h1>
            <h2>{token ?`${token}`:"no token"}</h2>

            {error && <p>There was an error verifying your email</p>}
            {verified && <p>Your email has been verified</p>}
        </div>
    );
}