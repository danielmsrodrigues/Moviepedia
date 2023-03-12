import { createContext } from "react";

interface ThemeContextProps {
  theme: any;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: {},
  toggleTheme: () => {},
});
