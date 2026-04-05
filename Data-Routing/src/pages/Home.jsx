import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
const Home = () => {
  return (
    <div className="h-full w-full bg-black">
      <h1 className="text-3xl text-center text-pink-600 p-3 font-bold">Home</h1>
    </div>
  );
};

export default Home;
