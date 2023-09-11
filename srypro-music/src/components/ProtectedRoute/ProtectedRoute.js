import { Navigate, Outlet } from 'react-router-dom'
// import { useEffect, useState  } from "react";

export const ProtectedRoute = ({
  redirectPath = '/signup',
  isAuthenticated,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
