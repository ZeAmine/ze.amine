import React, { useState, useContext, useCallback } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false });
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [lineCross, setLineCross] = useState(false);

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
        showMenu,
        setShowMenu,
        lineCross,
        setLineCross,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
