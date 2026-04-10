import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router' 
import Blog from '../pages/Blog'
import Login from '../components/Login'
// import Register from '../components/register'
import Register from '../components/Register'
import Dashboard from '../pages/Dashboard'
import BlogForm from '../components/BlogForm'
import ProtectedDashboard from '../layouts/ProtectedDashboard'
import BlogDetails from '../components/BlogDetails'
import Default from '../layouts/Default'
const Approutes = () => {

    let router = createBrowserRouter([
        {
            path: "/",
            element: <Default />,
            children: [
                {
                    path: '',
                    element: <Blog />,
                    children: [{
                        path: '/blog/:id',
                        element: <BlogDetails />
                    }]
                },
                {
                    path: '/dashboard',
                    element: <ProtectedDashboard />,
                    children: [
                        {
                            path: '',
                            element: <Dashboard />,
                            children: [
                                {
                                    path: 'new',
                                    element: <BlogForm />,
                                },
                            
                                {
                                    path: 'edit/:id',
                                    element: <BlogForm /> 
                                }
                            ]
                        }
                    ]

                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                }
            ]
        },
    ])

    return <RouterProvider router={router} />
}

export default Approutes