import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeContext } from "./useContext";

const ThemeContexProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme-dark");

    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }

    const systemMode: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return systemMode;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme-dark", JSON.stringify(isDark));
  }, [isDark]);

  const contextValue = { isDark, setIsDark };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContexProvider;
