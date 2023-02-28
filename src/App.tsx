import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/styles";
import { lightTheme } from "./themes";

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
