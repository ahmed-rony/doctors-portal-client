import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../Hook_Context/useAuth';



const PrivateRoute = ({children, ...rest}) => {
  const [loggedIn] = useAuth();
  const location = useLocation(); 
  return (
    loggedIn.email
    ? <Outlet />
    : <Navigate to='/login' state={{ from : location }} replace />
  )
};

export default PrivateRoute;
