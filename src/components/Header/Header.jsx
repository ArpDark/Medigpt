import React from "react";
export default function Header(){
  return(
    <div className="flex justify-between px-6 py-5 bg-zinc-500 text-white sticky items-center">
      <div className="Logo">
         Logo
      </div>
      <div className="font-titlefamily">
        <h3>
            MediGPT
        </h3>
      </div>
      <div>
        <button className="rounded-md bg-red-400 px-2 py-1">Logout</button>
      </div>
    </div>
  )
}