import React, { createContext, useContext, useMemo } from "react";
import axios, { AxiosInstance } from "axios";

export const AxiosContext = createContext<AxiosInstance>(undefined);

export default function AxiosProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const axiosMemo = useMemo(() => {
    const tempAxios = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API,
      headers: {
        "Content-Type": "application/json",
      },
    });

    tempAxios.interceptors.request.use((config) => {
      // Read token for anywhere, in this case directly from localStorage
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return tempAxios;
  }, []);

  return (
    <AxiosContext.Provider value={axiosMemo}>{children}</AxiosContext.Provider>
  );
}

export function useAxios() {
  return useContext(AxiosContext);
}