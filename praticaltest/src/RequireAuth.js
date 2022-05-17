import React from "react";
import { Route ,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireAuth({ children }) {
    const { currentUser } = localStorage.getItem("token");
  return currentUser ? children : <Navigate to="/login" replace />;
  
   
  }