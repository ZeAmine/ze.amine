import React, { useState, useContext, useCallback, useEffect } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false });
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [lineCross, setLineCross] = useState(false);
  const [theme, setTheme] = useState(false);

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  const handleOpenModal = (open) => {
    setIsOpen(open);
  };

  useEffect(() => {
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "default");
    } else {
      document.documentElement.setAttribute("data-theme", "clear");
    }
  }, [theme]);

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
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
