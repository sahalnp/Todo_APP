import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUser } from '../hooks/Context'
export const PrivateRoute = ({children}) => {
    const {user}=useUser()
    return user ? children : <Navigate to="/login" />;
}
