import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate=useNavigate();
    const change=()=>{
        navigate('/dash')
    }
  return (
    <>
    <button onClick={change}>dash</button>
    <div>home</div></>
  )
}
