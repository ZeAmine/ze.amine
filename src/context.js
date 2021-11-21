import React, { useState, useContext, useCallback } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false });
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  const handleOpenModal = (open) => {
    setIsOpen(open);
  };

  return (
    <AppContext.Provider
      value={{
        cursor,
        setCursor,
        toggleCursor,
        isOpen,
        setIsOpen,
        handleOpenModal,
        selected,
        setSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
