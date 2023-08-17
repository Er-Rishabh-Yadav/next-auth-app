"use client";
import Link from "next/link"
import axios from "axios"
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "@/component/footer";

export default function ProfilePage() {
    const router = useRouter();
    const [data , setData] = useState("nothing")
    const logout = async () => {
        try{
            await axios.get(`/api/users/logout`)
            console.log("Logout success ");
            router.push("/login")
            toast.success("Logout Successfull")
            
        }
        catch(err:any){
            console.log("Logout problem "+err.message)
            toast.error(err.message)
            
        }
    }

    const getProfile = async () => {
        try{
            const res = await axios.get(`/api/users/me`)
            console.log("Profile success "+res.data.user._id);
            setData(res.data.user._id);
        }
        catch(err:any){
            console.log("Profile problem "+err.message)
            toast.error(err.message)
            
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 text-green-600 py-2">
        <div className="bg-gray-500 p-4 rounded">
        <div className="flex flex-col text-2xl justify-center items-center text-center font-bold text-yellow-500 tracking-wider uppercase">
        <h1 className="fixed font-bold text-2xl tracking-widest left-0 top-0 flex w-full justify-center border-b  border-slate-300 uppercase pb-6 pt-8" >Profile</h1>
        
        <h2 className="p-2 rounded-3xl m-4 bg-green-700 text-white text-center">{data==='nothing'? "Nothing": <Link href={`/profile/${data}`}>{data}</Link>}</h2>
        
        <div className="flex flex-row items-center m-2 justify-center text-green-600 py-2">
        <button className="bg-slate-600 border-green-400 hover:border-2 text-white p-2 m-4" onClick={getProfile}>Get Details</button>
       
        <button className="bg-slate-600 border-green-400 hover:border-2 text-white p-2 m-4" onClick={logout}>
        Logout{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
        </button>
        </div>
        </div></div>
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