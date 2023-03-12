import { useContext } from "react";
import { useTheme } from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { lightTheme } from "../../themes";
import { IoIosSunny } from "react-icons/io";
import { HiMoon } from "react-icons/hi";
import Switch from "react-switch";
import { shade } from "polished";

const ThemeBtn = () => {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme === lightTheme}
      checkedIcon={<IoIosSunny color="white" />}
      uncheckedIcon={<HiMoon color="white" />}
      onColor={theme.colors.secondary}
      offColor={shade(0.6, theme.colors.secondary)}
    />
  );
};

export default ThemeBtn;
