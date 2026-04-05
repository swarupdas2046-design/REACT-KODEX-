import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MainLayouts from '../layouts/Mainlayouts'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRoues = () => {

    let router = createBrowserRouter([
        {
            path:'/dashboard',
            element:<MainLayouts/>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
            {
            path:'about',
            element:<About/>
        },
        {
            path:'contact',
            element:<Contact/>
        },
            ]
        },

        {
            path:'/',
            element:<AuthLayout/>,
            children:[
                {
                    path:'',
                    element:<Login/>
                },
                {
                    path:'register',
                    element:<Register/>
                },
            ]
        }
      
    ])


  return <RouterProvider router={router}/>
}

export default AppRoues
