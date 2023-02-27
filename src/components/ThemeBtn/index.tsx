import Switch from "react-switch";
import { HiMoon } from "react-icons/hi";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { shade } from "polished";

const ThemeBtn = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Switch
        onChange={() => {}}
        checked={true}
        checkedIcon={<IoIosSunny />}
        uncheckedIcon={<HiMoon />}
        offColor={shade(0.4, colors.primary)}
        onColor={colors.secondary}
      />
    </>
  );
};

export default ThemeBtn;
