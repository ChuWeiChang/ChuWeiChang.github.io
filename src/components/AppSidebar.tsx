import {
  Award,
  Camera,
  FolderGit2,
  Home,
  Languages,
  Monitor,
  Moon,
  Sparkles,
  Sun,
  Wrench,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NAME, type Content, type ViewId } from "@/content";
import type { Theme } from "@/hooks/useTheme";
import { VIEWS, viewHref } from "@/hooks/useView";

const ICONS: Record<ViewId, typeof Home> = {
  home: Home,
  work: Sparkles,
  more: FolderGit2,
  skills: Wrench,
  activities: Award,
  life: Camera,
};
const THEME_ICON = { system: Monitor, light: Sun, dark: Moon };

export function viewLabel(c: Content, id: ViewId) {
  return id === "home" ? c.ui.home : c.headings[id];
}

export function AppSidebar({
  c,
  view,
  theme,
  onTheme,
  onLang,
}: {
  c: Content;
  view: ViewId;
  theme: Theme;
  onTheme: () => void;
  onLang: () => void;
}) {
  const { setOpenMobile } = useSidebar();
  const ThemeIcon = THEME_ICON[theme];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <a href="#/" onClick={() => setOpenMobile(false)} className="flex items-center gap-3">
          <Avatar className="size-10 border">
            <AvatarImage src="avatar.jpg" alt={NAME} />
            <AvatarFallback>CW</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="font-semibold">{NAME}</p>
            <p className="text-xs text-muted-foreground">{c.role}</p>
          </div>
        </a>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {VIEWS.map((id) => {
                const Icon = ICONS[id];
                return (
                  <SidebarMenuItem key={id}>
                    <SidebarMenuButton asChild isActive={view === id}>
                      <a href={viewHref(id)} onClick={() => setOpenMobile(false)}>
                        <Icon />
                        <span>{viewLabel(c, id)}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={onLang}>
              <Languages />
              <span>{c.ui.switchLang}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={onTheme}>
              <ThemeIcon />
              <span>{c.ui.theme[theme]}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

