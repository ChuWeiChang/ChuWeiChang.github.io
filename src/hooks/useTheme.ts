import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";
const ORDER: Theme[] = ["system", "light", "dark"];
const media = window.matchMedia("(prefers-color-scheme: dark)");

function stored(): Theme {
  try {
    const t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") return t;
  } catch {}
  return "system";
}

// index.html applies the same rule inline before first paint to avoid a flash.
function apply(theme: Theme) {
  const dark = theme === "dark" || (theme === "system" && media.matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(stored);

  useEffect(() => {
    apply(theme);
    try {
      if (theme === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", theme);
    } catch {}
    if (theme !== "system") return;
    const onChange = () => apply("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const cycle = () => setTheme((t) => ORDER[(ORDER.indexOf(t) + 1) % ORDER.length]);
  return { theme, cycle };
}
