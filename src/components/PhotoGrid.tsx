import type { Lang, Photo } from "@/content";
import { cn } from "@/lib/utils";

// `feature` shows the first photo wide across the top; otherwise every photo gets a square tile.
export function PhotoGrid({ photos, lang, feature = false }: { photos: Photo[]; lang: Lang; feature?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
      {photos.map((p, i) => {
        const wide = feature && i === 0;
        return (
          <figure key={p.src} className={cn("overflow-hidden rounded-xl border bg-muted", wide && "col-span-2 sm:col-span-3")}>
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className={cn("w-full object-cover", wide ? "aspect-[3/2]" : "aspect-square")}
              style={p.focus ? { objectPosition: p.focus } : undefined}
            />
            {p.caption && (
              <figcaption className="line-clamp-2 px-2.5 py-1.5 text-xs text-muted-foreground">{p.caption[lang]}</figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
