import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const MainLayout = () => {
  let {Theme} = useSelector((store)=>store.HoleCart)
return (
    <div className={`h-screen w-full ${Theme?'bg-black text-white':'bg-white text-black'}`}>
    <Navbar />
    <div className="p-10">
        <Outlet />
    </div>
    </div>
);
};

export default MainLayout;
