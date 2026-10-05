import { AppSidebar, viewLabel } from "@/components/AppSidebar";
import { BlurFade } from "@/components/ui/blur-fade";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { content, NAME, type Content, type Lang, type ViewId } from "@/content";
import { useLang } from "@/hooks/useLang";
import { useTheme } from "@/hooks/useTheme";
import { useView } from "@/hooks/useView";
import { HomeView } from "@/views/Home";
import {
  ActivitiesView,
  LifeView,
  MoreView,
  SkillsView,
  WorkView,
} from "@/views/Sections";

function renderView(view: ViewId, c: Content, lang: Lang) {
  switch (view) {
    case "home": return <HomeView c={c} lang={lang} />;
    case "work": return <WorkView c={c} />;
    case "more": return <MoreView c={c} />;
    case "skills": return <SkillsView c={c} />;
    case "activities": return <ActivitiesView c={c} />;
    case "life": return <LifeView lang={lang} />;
  }
}

export default function App() {
  const { lang, toggle } = useLang();
  const { theme, cycle } = useTheme();
  const view = useView();
  const c = content[lang];

  return (
    <TooltipProvider delayDuration={200}>
      <SidebarProvider>
        <AppSidebar c={c} view={view} theme={theme} onTheme={cycle} onLang={toggle} />
        <SidebarInset>
          {/* On small screens the sidebar becomes a slide-out sheet opened from this bar. */}
          <header className="sticky top-0 z-10 flex h-12 items-center gap-2 border-b bg-background/80 px-3 backdrop-blur md:hidden">
            <SidebarTrigger aria-label={c.ui.menu} />
            <span className="text-sm font-medium">{view === "home" ? NAME : viewLabel(c, view)}</span>
          </header>

          <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-8 md:py-16">
            {view !== "home" && (
              <h1 className="mb-8 text-3xl font-bold tracking-tight">{viewLabel(c, view)}</h1>
            )}
            <BlurFade key={view + lang}>{renderView(view, c, lang)}</BlurFade>
            <footer className="mt-16 border-t pt-6 text-xs text-muted-foreground">
              © {new Date().getFullYear()} {NAME}
            </footer>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
