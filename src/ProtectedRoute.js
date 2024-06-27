import React from 'react';
import { Navigate } from 'react-router-dom';


export function ProtectedRoute({children}) {

    const isAuth = localStorage.getItem("token");
    console.log(isAuth);
    console.log("Token Received");
  return (
    <div>
        { isAuth ? children : <Navigate replace to ="/" />} 
    </div>
  )
}



