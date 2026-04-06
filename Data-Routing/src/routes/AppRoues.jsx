import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayouts from "../layouts/Mainlayouts";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import ProtectedDashboard from "./ProtectedDashboard";
import ProtectedAuth from "./ProtectedAuth";
import { FetchProduct } from "../api/ProductApies";

const AppRoues = () => {
let router = createBrowserRouter([
    {
    path: "/dashboard",
    element: <ProtectedDashboard />,
    children: [
        {
        path: "",
        element: <MainLayouts />,
        children: [
            {
            path: "",
            loader: async()=>{
                let data = await FetchProduct()
                return data
            },
            hydrateFallbackElement : <h1 className="text-4xl text-pink-900 font-bold">Loading......</h1>,
            element: <Home />,
            },
            {
            path: "about",
            element: <About />,
            },
            {
            path: "contact",
            element: <Contact />,
            },
        ],
        },
    ],
    },

    {
    path: "/",
    element: <ProtectedAuth />,
    children: [
        {
        path: "",
        element: <AuthLayout />,
        children: [
            {
            path: "",
            element: <Login />,
            },
            {
            path: "register",
            element: <Register />,
            },
        ],
        },
    ],
    },
]);

  return <RouterProvider router={router} />;
};

export default AppRoues;
