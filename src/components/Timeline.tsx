import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Content, Phase } from "@/content";
import { cn } from "@/lib/utils";

// School is blue, work is amber: markers, the work cards and the legend all share these.
const SCHOOL = {
  dot: "bg-sky-500",
  icon: "border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400",
  line: "border-sky-500/30",
};
const WORK = {
  icon: "border-amber-500/40 bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  card: "rounded-lg border border-amber-500/25 bg-amber-500/5 px-3 py-2.5",
  org: "text-amber-700 dark:text-amber-400",
};

export function Timeline({ phases, legend }: { phases: Phase[]; legend: Content["ui"]["legend"] }) {
  return (
    <div className="space-y-6">
      <div className="flex gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className={cn("size-2.5 rounded-full", SCHOOL.dot)} /> {legend.school}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-amber-500" /> {legend.work}
        </span>
      </div>

      {/* Content lists phases and milestones newest first; the timeline reads oldest → newest. */}
      {[...phases].reverse().map((phase) => (
        <div key={phase.degree}>
          <div className="mb-4 flex items-start gap-3">
            <span className={cn("mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border", SCHOOL.icon)}>
              <GraduationCap className="size-4" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">{phase.degree}</h3>
                <span className="font-mono text-xs text-muted-foreground">{phase.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{phase.school}</p>
            </div>
          </div>

          <ol className={cn("ml-[17px] space-y-5 border-l-2 pl-6", SCHOOL.line)}>
            {[...phase.milestones].reverse().map((m) => {
              const work = Boolean(m.org);
              return (
                <li key={m.date + m.title} className="relative">
                  {work ? (
                    <span className={cn("absolute top-2.5 -left-[38px] flex size-6 items-center justify-center rounded-full border", WORK.icon)}>
                      <Briefcase className="size-3" />
                    </span>
                  ) : (
                    <span className={cn("absolute top-1.5 -left-[31px] size-2.5 rounded-full ring-4 ring-background", SCHOOL.dot)} />
                  )}
                  <div className={cn(work && WORK.card)}>
                    <p className="font-mono text-xs text-muted-foreground">{m.date}</p>
                    <p className="font-medium">
                      {m.title}
                      {m.org && <span className={cn("font-normal", WORK.org)}> · {m.org}</span>}
                    </p>
                    {m.desc && <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>}
                    {m.links && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {m.links.map((l) => (
                          <Badge key={l.href} variant="outline" asChild className="font-mono text-[11px] font-normal">
                            <a href={l.href}>{l.label}</a>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}
