import { Image as ImageIcon, Play, Video } from "lucide-react";
import { cn } from "@/lib/utils";

export type MediaItem = {
  type: "image" | "video";
  src?: string;
  poster?: string;
  title: string;
  description: string;
};

export function MediaCard({
  item,
  onOpen,
  className,
  index,
}: {
  item: MediaItem;
  onOpen?: () => void;
  className?: string;
  index?: number;
}) {
  const hasMedia = Boolean(item.src);
  return (
    <figure
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]",
        className,
      )}
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-secondary to-accent/60"
        aria-label={`Open ${item.title || "media"}`}
      >
        {hasMedia ? (
          item.type === "video" ? (
            <>
              {item.poster ? (
                <img
                  src={item.poster}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <video src={item.src} className="h-full w-full object-cover" muted />
              )}
              <span className="absolute inset-0 grid place-items-center bg-black/20">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-background/90 text-primary shadow-lg">
                  <Play className="h-6 w-6 translate-x-0.5" />
                </span>
              </span>
            </>
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          )
        ) : (
          <EmptyTile type={item.type} index={index} />
        )}
      </button>
      <figcaption className="p-4 sm:p-5">
        <h3 className="font-medium text-foreground leading-snug">
          {item.title || <span className="italic text-muted-foreground/80">Insert title</span>}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {item.description || <span className="italic text-muted-foreground/70">Add description</span>}
        </p>
      </figcaption>
    </figure>
  );
}

function EmptyTile({ type, index }: { type: "image" | "video"; index?: number }) {
  const Icon = type === "video" ? Video : ImageIcon;
  return (
    <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-primary/70">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-background/80 border border-primary/15">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-medium">
        Upload {type} here
      </span>
      {typeof index === "number" && (
        <span className="text-xs text-muted-foreground/70">Slot {index + 1}</span>
      )}
    </span>
  );
}
