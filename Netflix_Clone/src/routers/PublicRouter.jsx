import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/Context";

export const PublicRouter = ({ children }) => {
  const { user } = useUser();
  const isAuth=localStorage.getItem("auth")
  console.log(isAuth,"fghjkl");
  
  if (!user || !isAuth) {
    return children;
  }
};
