"use client";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {currentTheme == "dark" ? (
        <MdOutlineLightMode
          className="text-2xl hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-2xl hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
