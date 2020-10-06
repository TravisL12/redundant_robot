import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const ThemeToggleContext = createContext();

export const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ color: "#46b78d" });

  const updateTheme = val => {
    setTheme(val);
  };

  return (
    <ThemeToggleContext.Provider value={{ updateTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export const useMyTheme = () => useContext(ThemeToggleContext);
