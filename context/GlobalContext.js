"use client";
import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [data, setData] = useState({});
  const updateData = (data) => setData(data);

  return (
    <GlobalStateContext.Provider value={{ data, updateData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export {GlobalStateProvider, useGlobalState};