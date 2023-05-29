import React from 'react';  
import { useSelector } from 'react-redux'
import {Outlet, Navigate } from 'react-router-dom';
const  AdminRoute = () => {
    const user = useSelector(state => state.user.user)
    const isAuth = localStorage.getItem('token');
    
return isAuth? <Outlet /> : <Navigate to="/login" />
    
    
}

export default AdminRoute;