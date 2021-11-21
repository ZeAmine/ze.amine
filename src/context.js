import React, { useState, useContext, useCallback } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false });
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (open) => {
    setIsOpen(open);
  };

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  return (
    <AppContext.Provider
      value={{
        cursor,
        setCursor,
        toggleCursor,
        isOpen,
        setIsOpen,
        handleOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
