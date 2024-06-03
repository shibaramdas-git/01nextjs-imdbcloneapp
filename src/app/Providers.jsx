"use client"; //Because it needs user interaction

import { ThemeProvider } from "next-themes";
function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen select-none bg-neutral-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
export default Providers;
