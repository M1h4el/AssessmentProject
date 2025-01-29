"use client";

import { createContext, useContext, useState, useEffect } from "react";


const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLogin, setIslogin] = useState(false);
  const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND

  useEffect(() => {

    const Loged = localStorage.getItem("IsLogin");
    setIslogin(Loged === "true");
  }, []);

  function login() {
    setIslogin(true);
    localStorage.setItem("IsLogin", "true");
  }

  function logout() {
    setIslogin(false);
    localStorage.setItem("IsLogin", "false");
  }

  const value = {
    data,
    isLogin,
    login,
    logout,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
