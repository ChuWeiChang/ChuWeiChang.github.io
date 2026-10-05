import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Project } from "@/content";

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Card className="gap-3 py-5">
      <CardHeader className="px-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base font-semibold">
            {p.href ? (
              <a href={p.href} className="group inline-flex items-center gap-1.5 hover:underline">
                {p.title}
                <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-foreground" />
              </a>
            ) : (
              p.title
            )}
          </h3>
          {p.status && <Badge variant="secondary">{p.status}</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{p.role}</p>
      </CardHeader>
      <CardContent className="content space-y-2 px-5 text-sm leading-relaxed">
        {p.desc && <p>{p.desc}</p>}
        <ul className="list-disc space-y-1.5 pl-5 marker:text-muted-foreground">
          {p.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-1.5 px-5">
        {p.tags.map((t) => (
          <Badge key={t} variant="outline" className="font-mono text-[11px] font-normal">
            {t}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
