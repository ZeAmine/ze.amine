import React, { useState, useContext, useCallback } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false });

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  return (
    <AppContext.Provider value={{ cursor, setCursor, toggleCursor }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
