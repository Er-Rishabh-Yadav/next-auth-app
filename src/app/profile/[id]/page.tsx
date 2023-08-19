"use client";
import { ToastBar, Toaster } from "react-hot-toast";
import Link from "next/link";
import Footer from "@/component/footer"


export default function UserProfile({ params }: any) {


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 py-2">
            <div className="bg-gray-500 p-4 rounded">
                <div className="flex flex-col text-2xl justify-center items-center text-center font-bold text-yellow-500 tracking-wider uppercase">
                    <h1 className="fixed font-bold text-2xl tracking-widest left-0 top-0 flex w-full justify-center border-b  border-slate-300 uppercase pb-6 pt-8" >Profile</h1>
                    <h2 className="p-2 rounded-xl m-4   text-left"> User Id : {params.id}</h2>
                    < div className="flex flex-row m-2 items-center justify-center  py-2">
                        <Link className="bg-orange-600 hover:bg-yellow-500 text-white p-2 m-4" href='/profile'>
                            BACK
                        </Link>
                        <Link className="bg-slate-300  hover:bg-green-400 text-slate-600 p-2 m-4" href='/'>
                            Home
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