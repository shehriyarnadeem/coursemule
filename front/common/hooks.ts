import { useEffect, useState } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState("dark");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return { colorTheme, setTheme };
}


