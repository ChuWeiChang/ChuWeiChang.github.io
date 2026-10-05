import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { PhotoGrid } from "@/components/PhotoGrid";
import { LIFE_PHOTOS, type Content, type Lang } from "@/content";

const STEP = 0.05;

export function WorkView({ c }: { c: Content }) {
  return (
    <div className="space-y-4">
      {c.projects.map((p, i) => (
        <BlurFade key={p.href ?? p.title} delay={STEP * i}>
          <ProjectCard project={p} />
        </BlurFade>
      ))}
    </div>
  );
}

export function MoreView({ c }: { c: Content }) {
  return (
    <ul className="space-y-3">
      {c.more.map((m, i) => (
        <li key={m.href} className="text-sm leading-relaxed">
          <BlurFade delay={STEP * i}>
            <a href={m.href} className="mr-2 font-mono font-medium hover:underline">
              {m.name}
            </a>
            <span className="text-muted-foreground">{m.desc}</span>
          </BlurFade>
        </li>
      ))}
    </ul>
  );
}

export function SkillsView({ c }: { c: Content }) {
  return (
    <div className="space-y-5">
      {c.skills.map((s, i) => (
        <BlurFade key={s.label} delay={STEP * i}>
          <p className="mb-2 text-sm text-muted-foreground">{s.label}</p>
          <div className="flex flex-wrap gap-1.5">
            {s.items.map((it) => (
              <Badge key={it} variant="secondary" className="font-normal">
                {it}
              </Badge>
            ))}
          </div>
        </BlurFade>
      ))}
    </div>
  );
}

export function ActivitiesView({ c }: { c: Content }) {
  return (
    <div className="space-y-6">
      {c.activities.map((a) => (
        <div key={a.org}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-semibold">
              {a.role} · {a.org}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">{a.time}</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function LifeView({ lang }: { lang: Lang }) {
  return <PhotoGrid photos={LIFE_PHOTOS} lang={lang} />;
}
