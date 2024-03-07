import React from "react";
import Button from '@mui/material/Button';
export default function Doctors(){
    return(
        <div className="mainscreen bg-slate-200 min-h-screen w-full z-auto">
 <div className="cards m-4 grid gap-4 sm:grid-cols-3 mt-16">
  <div className="card min-h-[100px] rounded-lg shadow-xl">
    <div className="rounded-lg p-1 flex-col items-center">
<div className="m-4 grid gap-4 grid-cols-7">
  <div className="card-image min-h-[100px] rounded-lg col-span-2 overflow-hidden">
    <img className="w-full h-full object-cover"
     src="https://th.bing.com/th/id/OIP.IoUmyjrf4VaXudyiVqv2WwHaII?rs=1&pid=ImgDetMain"></img>
  </div>
  <div className="card-description min-h-[100px] rounded-lg col-span-5">
    <h1>Dr.Jane Cooper</h1>
    <p>Dentist</p>
  </div>
</div>
<div className="flex items-center justify-center">
  <div className="card-button w-[25%] min-h-[30px] rounded-lg mb-4">
  <Button  variant="contained">Book</Button>
  </div>
</div>
</div>
  </div>
  <div className="card min-h-[100px] rounded-lg shadow-xl">
        <div className="rounded-lg p-1 flex-col items-center">
<div className="m-4 grid gap-4 grid-cols-7">
  <div className="card-image min-h-[100px] rounded-lg col-span-2 overflow-hidden">
  <img className="w-full h-full object-cover"
     src="https://th.bing.com/th/id/OIP.oH4ileG06OY56e7oszwQ8AHaHa?w=768&h=768&rs=1&pid=ImgDetMain"></img>
  </div>
  <div className="card-description min-h-[100px] rounded-lg col-span-5">
    <h1>Dr.Robert Fox</h1>
    <p>Dentist</p>
  </div>
</div>
<div className="flex items-center justify-center">
  <div className="w-[25%] min-h-[30px] rounded-lg mb-4">
  <Button  variant="contained">Book</Button>
  </div>
</div>
</div>
  </div>
  <div className="card min-h-[100px] rounded-lg shadow-xl">
            <div className="rounded-lg p-1 flex-col items-center">
<div className="m-4 grid gap-4 grid-cols-7">
  <div className="card-image min-h-[100px] rounded-lg col-span-2 overflow-hidden">
  <img className="w-full h-full object-cover"
     src="https://th.bing.com/th/id/OIP.UYf9VOXnrtW-OZwkbWbj4wHaHa?w=512&h=512&rs=1&pid=ImgDetMain"></img>
  </div>
  <div className="card-description min-h-[100px] rounded-lg col-span-5">
    <h1>Dr.Jacob Jones</h1>
    <p>Dentist</p>
  </div>
</div>
<div className="flex items-center justify-center">
  <div className="card-button w-[25%] min-h-[30px] rounded-lg mb-4">
  <Button  variant="contained">Book</Button>
  </div>
</div>
</div>
  </div>
</div>
</div>
    )
}