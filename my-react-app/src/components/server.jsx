import React from 'react'
import { Dashboard } from './dashboard'
import { Home } from './home'
import { Nav } from './Nav'
import {RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Sat } from './sat'
import { Comp } from './comp'
const router=createBrowserRouter(
    [
        {
            path:'/',
            element:
            <div>
                <Nav />
                <Home />
            </div>
        },
        {
            path:'/dash',
            element: <div>
                <Nav />
                <Dashboard />
            </div>,
            children:[
                {
                path:'sat',
                element:<Sat />
                },
                {
                path:'comp',
                element:<Comp />
                }
            ]
        },
    ]
)
export const Server = () => {
  return (
    <div>
        <RouterProvider router={router} />

    </div>
  )
}
