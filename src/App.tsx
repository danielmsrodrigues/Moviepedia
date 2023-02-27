import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Intro from "./pages/Home";
import GlobalStyle from "./styles/styles";
import { lightTheme } from "./themes";

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Header />
        <Intro />
      </ThemeProvider>
    </>
  );
};

export default App;
