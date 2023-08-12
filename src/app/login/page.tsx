"use client";
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter} from "next/navigation"
import axios from "axios"
import toast ,{ Toaster,ToastBar}from "react-hot-toast";


export default function LoginPage() {
    const router = useRouter()
   
    const [user, setUser] = React.useState({ email: "", password: ""})
    const [button, setButton] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const onLogin = async () => {
        
        setLoading(true)
        await axios.post("/api/users/login", user).then((res) => {
            console.log(res.data)
            router.push("/profile")
            toast.success("Login Successfull")
            
        }).catch((err) => {
            console.log(err.response.data.error)
            toast.error(err.response.data.error)
        })
        .finally(() => {
            setLoading(false)
        })
    }
    useEffect(() => {
        if(user.email.length>0 && user.password.length>0){
            setButton(false)}
        else{
            setButton(true)
        }
    })
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-500 py-2">
            <h1 className="fixed text-2xl  tracking-wider left-0 top-0 flex w-full justify-center border-b border-slate-300 bg-gradient-to-b from-slate-200 pb-6 pt-8 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-800/30 dark:from-inherit uppercase ">{loading ? "Processing" : "Login"}</h1>
            <hr />
            
            <label className="" htmlFor="email">Email</label>
            <input className="p-2 border rounded-xl border-gray-300" type="text" id="email" value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})} placeholder="Email"/>
            
            <label className="" htmlFor="password">Password</label>
            <input className="p-2 border rounded-xl border-gray-300" type="password" id="password" value={user.password} onChange={(e)=> setUser({...user,password:e.target.value})} placeholder="Password"/>

            <button className="p-2 border border-gray-300 rounded-lg m-4 focus:outline-none focus:border-gray-600" onClick={onLogin}>
                {button ? "Please fill all the fields" : "Login"}
            </button>

            <Link className="text-blue-700" href="/signup">Visit Signup Page?</Link>
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
        </div>
    );
}