import Switch from "react-switch";
import { HiMoon } from "react-icons/hi";
import { IoIosSunny } from "react-icons/io";

const ThemeBtn = () => {
  return (
    <>
      <Switch
        onChange={() => {}}
        checked={true}
        checkedIcon={<IoIosSunny />}
        uncheckedIcon={<HiMoon />}
      />
    </>
  );
};

export default ThemeBtn;
