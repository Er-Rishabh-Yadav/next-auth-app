
export default function UserProfile({params}:any) {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 text-white py-2">
        <h1 className="fixed font-bold text-2xl tracking-widest left-0 top-0 flex w-full justify-center border-b border-slate-300 bg-gradient-to-b from-slate-200 pb-6 pt-8 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-800/30 dark:from-inherit uppercase " >Profile</h1>
        <hr />
        <p className="text-4xl">Profile page <span className="bg-orange-500 p-2">{params.id}</span></p>
        </div>
    );
}