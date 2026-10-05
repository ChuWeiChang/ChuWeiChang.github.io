import { useEffect, useState } from "react";
import type { Lang } from "@/content";

const LANGS: Lang[] = ["en", "zh-TW"];
const isLang = (v: string | null): v is Lang => LANGS.includes(v as Lang);

// Priority: ?lang= in the URL, then the visitor's last choice, then English.
function initialLang(): Lang {
  const q = new URLSearchParams(location.search).get("lang");
  if (isLang(q)) return q;
  try {
    const saved = localStorage.getItem("lang");
    if (isLang(saved)) return saved;
  } catch {}
  return "en";
}

export function useLang() {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "zh-TW" : "en"));
  return { lang, toggle };
}
