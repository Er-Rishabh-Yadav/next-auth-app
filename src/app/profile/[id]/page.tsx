"use client";
import { ToastBar, Toaster } from "react-hot-toast";
import Link from "next/link";
import Footer from "@/component/footer"
import { useRouter } from "next/navigation";
import { use } from "react";

export default function UserProfile({params}:any) {

    const profile = async () => {
      const route = useRouter();
      route.push("/profile")
    }
    const goHome = async () => {
      const route = useRouter();
      route.push("/")
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 text-green-600 py-2">
        <div className="bg-gray-500 p-4 rounded">
        <div className="flex flex-col text-2xl justify-center items-center text-center font-bold text-yellow-500 tracking-wider uppercase">
        <h1 className="fixed font-bold text-2xl tracking-widest left-0 top-0 flex w-full justify-center border-b  border-slate-300 uppercase pb-6 pt-8" >Profile</h1>
        
        <h2 className="p-2 rounded-xl m-4 bg-orange-300 text-white text-center">ID : {params.id}</h2>
        
       < div className="flex flex-col items-center justify-center text-green-600 py-2">
        <Link className="bg-slate-600 border-green-400 hover:border-2 text-white p-2 m-4" href={'/profile'}>
        BACK
        </Link>
        <Link className="bg-slate-600 border-green-400 hover:border-2 text-white p-2 m-4" href={'/'}>
        Go To Home{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
        </Link>
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

        <Footer />
        </div>

        
    
    );
}