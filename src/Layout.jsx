import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

function Layout(){
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchUser=async ()=>{
            if(!localStorage.getItem("token"))
            {
                navigate("/signin");
            }
            // console.log(user);
        }
        fetchUser();
      },[]);

    if(localStorage.getItem("token"))
    {
        return(
            <>
                <Header/>
                <Outlet/>
            </>
        )
    }
    else
    {
        return(
            <div></div>
        );
    }
}
export default Layout;