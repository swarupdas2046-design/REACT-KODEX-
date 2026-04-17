import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../../features/auth/pages/LoginPage'
import RegisterPage from '../../features/auth/pages/RegisterPage'
import DashboardLayout from '../layouts/DashboardLayout'
import HomePage from '../../features/dashboard/pages/HomePage'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import EmployeePage from '../../features/employee/pages/EmployeePage'
import RegistrationPage from '../../features/employee/pages/RegistrationPage'
const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicRoute/>,
            children:[
                {
                    path:'',
                    element:<AuthLayout/>,
            children:[
                {
                    path:"",
                    element:<LoginPage/>
                },
                {
                    path:"register",
                    element:<RegisterPage/>
                }
            ]
                }
            ]
        },
        {
            path:"/dashboard",
            element:<ProtectedRoute/>,
            children:[
                {
                    path:'',
                    element:<DashboardLayout/>,
            children:[
                {
                    path:"",
                    element:<HomePage/>
                },
                {
                    path:'employee',
                    element:<EmployeePage/>
                },
                {
                    path:'registration',
                    element:<RegistrationPage/>
                }
            ]
                }
            ]
        }
    ])
return <RouterProvider router={router} /> 
}

export default AppRoutes
