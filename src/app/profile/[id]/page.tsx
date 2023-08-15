"use client";
import { ToastBar, Toaster } from "react-hot-toast";
import Link from "next/link";
import Footer from "@/component/footer"

export default function UserProfile({params}:any) {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 text-green-600 py-2">
        <div className="bg-gray-500 p-4 rounded">
        <div className="flex flex-col text-2xl justify-center items-center text-center font-bold text-yellow-500 tracking-wider uppercase">
        <h1 className="fixed font-bold text-2xl tracking-widest left-0 top-0 flex w-full justify-center border-b  border-slate-300 uppercase pb-6 pt-8" >Profile</h1>
        
        <h2 className="p-2 rounded-xl m-4 bg-orange-700 text-white text-center">ID : {params.id}</h2>
        
        
        <Link
          href="/"
          className="cursor-pointer m-5 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-600 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >


          <h2 className={`mb-3 text-2xl font-semibold`}>
            Home{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Checkout the home page!
          </p>
        </Link>
        
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