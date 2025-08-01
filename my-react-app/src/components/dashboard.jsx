import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const nav=useNavigate()
    const fn=()=>{
        nav('/dash/comp')
    }
    const fns=()=>{
        nav('/dash/sat')
    }
 return (
  <div>

    <h1 className="text-3xl font-bold text-green-500">Tailwind is working!</h1>
    <button onClick={fn}>comp</button>
    <button onClick={fns}>sat</button>
    <div>dashboard</div>
    <Outlet />
  </div>
);

}
