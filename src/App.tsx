import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
import GlobalStyle from "./styles/styles";
import { darkTheme, lightTheme } from "./themes";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <GlobalStyle />
          <Outlet />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
