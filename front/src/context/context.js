import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(true);

  const anotherThemeSet = () => {
    setTheme(prev => !prev)
  }


  return (
    <themeContext.Provider value={{ theme, setTheme, anotherThemeSet }}>
      {children}
    </themeContext.Provider>
  );
}

export const useThemeContext = () => useContext(themeContext);
