import { useEffect, useState } from "react";
import type { ViewId } from "@/content";

export const VIEWS: ViewId[] = ["home", "work", "more", "skills", "activities", "life"];

// Views live in the URL hash (#/work) so they can be linked to and the back button works.
function fromHash(): ViewId {
  const id = location.hash.replace(/^#\/?/, "");
  return (VIEWS as string[]).includes(id) ? (id as ViewId) : "home";
}

export const viewHref = (id: ViewId) => (id === "home" ? "#/" : `#/${id}`);

export function useView() {
  const [view, setView] = useState<ViewId>(fromHash);

  useEffect(() => {
    const onHash = () => {
      setView(fromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return view;
}
