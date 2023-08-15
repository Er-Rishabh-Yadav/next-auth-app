"use client";
import Link from "next/link"
import axios from "axios"
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
    const router = useRouter();
    const [data , setData] = useState("nothing")
    const logout = async () => {
        try{
            await axios.get("/api/users/logout")
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
            const res = await axios.get("/api/users/me")
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
        
        <h2 className="p-2 rounded-3xl m-4 bg-orange-700 text-white text-center">{data==='nothing'? "Nothing": <Link href={`/profile/${data}`}>{data}</Link>}</h2>
        
        <button className="bg-gray-300 text-white p-2 m-3" onClick={getProfile}>Get Details</button>
        
        <a
          onClick={logout}
          className="cursor-pointer m-5 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >


          <h2 className={`mb-3 text-2xl font-semibold`}>
            Logout{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            You are going to Logout!
          </p>
        </a>
        
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
        </div>
    );
}