import Menuitem from "./Menuitem";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    //Header component
    <div className="max-w-[1400px] flex justify-between items-center h-[50px] w-[99%] mx-auto py-8 px-2">
      <div className="flex text-xl gap-4">
        <Menuitem title="Home" address="/" Icon={FaHome} />
        <Menuitem
          title="About"
          address="/about"
          Icon={HiMiniInformationCircle}
        />
      </div>
      <div className="flex gap-4 items-center">
        <DarkModeSwitch />
        <span className="text-2xl font-bold bg-amber-500 rounded-sm px-3 py-1/2">
          IMBD
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </div>
    </div>
  );
}

export default Header;
