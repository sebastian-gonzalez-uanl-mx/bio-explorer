import { useState } from "react";
import { MediaCard, type MediaItem } from "./MediaCard";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

type Variant = "compact" | "sequence" | "masonry";

export function MediaGallery({
  items,
  variant = "compact",
  onItemsChange,
}: {
  items: MediaItem[];
  variant?: Variant;
  onItemsChange?: (items: MediaItem[]) => void;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [state, setState] = useState(items);
  const list = onItemsChange ? items : state;
  const setList = onItemsChange ?? setState;

  if (variant === "sequence") {
    return (
      <>
        <ol className="space-y-6">
          {list.map((item, i) => (
            <li
              key={i}
              className="grid sm:grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start"
            >
              <div className="flex sm:flex-col items-center sm:items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-serif font-semibold">
                  {i + 1}
                </span>
                {i < list.length - 1 && (
                  <span className="hidden sm:block w-px h-16 bg-border ml-5" />
                )}
              </div>
              <MediaCard item={item} index={i} onOpen={() => setOpen(i)} />
            </li>
          ))}
        </ol>
        <Lightbox items={list} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
      </>
    );
  }

  const gridClass =
    variant === "masonry"
      ? "columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5 [&>*]:break-inside-avoid"
      : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={cn(gridClass)}>
        {list.map((item, i) => (
          <MediaCard
            key={i}
            item={item}
            index={i}
            onOpen={() => setOpen(i)}
            className={variant === "masonry" ? "inline-block w-full" : undefined}
          />
        ))}
      </div>
      <Lightbox items={list} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}

// helper to build N empty slots
export function emptySlots(n: number, type: "image" | "video" = "image"): MediaItem[] {
  return Array.from({ length: n }, () => ({
    type,
    title: "",
    description: "",
  }));
}
