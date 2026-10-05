import { FileText, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Timeline } from "@/components/Timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EMAIL, GITHUB, NAME, PHOTOS, type Content, type Lang } from "@/content";

export function HomeView({ c, lang }: { c: Content; lang: Lang }) {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <div className="flex items-center gap-5">
          <Avatar className="size-20 border sm:size-24">
            <AvatarImage src="avatar.jpg" alt={NAME} />
            <AvatarFallback>CW</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{NAME}</h1>
            <p className="mt-1 text-muted-foreground sm:mt-2 sm:text-lg">{c.role}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {c.focus.map((f) => (
            <Badge key={f} variant="secondary">
              {f}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          <Button asChild>
            <a href={`mailto:${EMAIL}`}>
              <Mail /> {c.ui.email}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={GITHUB}>
              <GithubIcon className="size-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="cv.pdf">
              <FileText /> {c.ui.cv}
            </a>
          </Button>
        </div>
      </header>

      <Card className="py-2">
        <CardContent className="px-5">
          <dl className="divide-y">
            {c.facts.map((f) => (
              <div key={f.label} className="grid gap-1 py-3 text-sm sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="text-muted-foreground">{f.label}</dt>
                <dd>
                  {f.href ? (
                    <a href={f.href} className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground">
                      {f.value}
                    </a>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>

      {PHOTOS.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground">{c.ui.photos}</h2>
          <PhotoGrid photos={PHOTOS} lang={lang} feature />
        </section>
      )}

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">{c.headings.timeline}</h2>
        <Timeline phases={c.timeline} legend={c.ui.legend} />
        <p className="text-sm text-muted-foreground">{c.toefl}</p>
      </section>
    </div>
  );
}
