"use client";
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter} from "next/navigation"
import axios from "axios"
import toast, {Toaster,ToastBar} from "react-hot-toast";


export default function SignupPage() {
    const router = useRouter()
   
    const [user, setUser] = React.useState({username: "", email: "", password: ""})
    const [button, setButton] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    
    const onSignup = async () => {
        setLoading(true)
        await axios.post("/api/users/signup", user).then((res) => {
            console.log(res.data)
            router.push("/login")
            toast.success("SignUp Successfull")
            
        }).catch((err) => {
            console.log(err.response.data.error)
            toast.error(err.response.data.error)
        })
        .finally(() => {
            setLoading(false)
        })

    }
    useEffect(() => {
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButton(false)}
        else{
            setButton(true)
        }
    },[user])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 py-2">
            <h1 className="fixed text-2xl  tracking-wider left-0 top-0 flex w-full justify-center border-b border-slate-300 pb-6 pt-8  uppercase font-bold text-yellow-500 m-2">{loading ? "Processing" : "Sign up"}</h1>
            <hr />

            <div className="bg-gray-500 p-4 rounded">

            <div className="flex flex-row justify-center items-center mb-2 ">
            <label className="ml-2 text-white" htmlFor="username">Username :</label>
            <input className="p-2 ml-2 rounded-xl border border-gray-300" type="text" id="username" value={user.username} onChange={(e)=> setUser({...user,username:e.target.value})} placeholder="Username"/>
            </div>

            <div className="flex flex-row justify-center items-center mb-2 focus:outline-none">
            <label className="ml-8 text-white" htmlFor="email">Email :</label>
            <input className="p-2 ml-5   border rounded-xl border-gray-300" type="text" id="email" value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})} placeholder="Email"/>
            </div>

            <div className="flex flex-row justify-center items-center mb-2">
            <label className="ml-2 text-white" htmlFor="password">Password :</label>
            <input className="p-2 ml-4 border rounded-xl border-gray-300" type="password" id="password" value={user.password} onChange={(e)=> setUser({...user,password:e.target.value})} placeholder="Password"/>
            </div>

            <div className="flex flex-row justify-center items-center m-2">
            <button className="p-2 border text-white border-gray-300 rounded-lg m-4 focus:outline-none focus:border-gray-300 hover:bg-green-500" onClick={onSignup}>
                {button ? "Please fill all the fields" : "Signup"}
            </button>
            </div>

            <div className="flex flex-row justify-center items-center m-2">
            <Link className="text-blue-700" href="/login">visit Login Page?</Link>
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
        </div>
    );
}