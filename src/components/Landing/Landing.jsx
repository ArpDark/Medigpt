import React from "react";
import { Link } from "react-router-dom";
export default function Landing(){
    return(
        <div className="w-full max-h-screen flex flex-col justify-center items-center">
           <div className="text-center h-[50%]">
            <h1 className="font-titlefamily">Welcome To MediGPT</h1>
           </div>
           <Link to="/signin" className="rounded-md px-5 py-5 bg-red-400 m-10 no-underline">
            Get Started
           </Link>
        </div>
    )
}