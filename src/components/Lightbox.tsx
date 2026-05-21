import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { MediaItem } from "./MediaCard";

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: MediaItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;
  const current = open ? items[index] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onIndexChange((index! + 1) % items.length);
      if (e.key === "ArrowLeft") onIndexChange((index! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, items.length, onIndexChange]);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="max-w-5xl border-0 bg-background/95 backdrop-blur p-0 overflow-hidden [&>button.absolute]:hidden"
      >
        {current && (
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/80 border border-border hover:bg-background"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            {items.length > 1 && (
              <>
                <button
                  onClick={() => onIndexChange((index! - 1 + items.length) % items.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/80 border border-border hover:bg-background"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onIndexChange((index! + 1) % items.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/80 border border-border hover:bg-background"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            <div className="aspect-video bg-muted flex items-center justify-center">
              {current.src ? (
                current.type === "video" ? (
                  <video src={current.src} controls className="max-h-[70vh] w-full" />
                ) : (
                  <img src={current.src} alt={current.title} className="max-h-[70vh] w-full object-contain" />
                )
              ) : (
                <EmptyPreview type={current.type} />
              )}
            </div>
            <div className="p-5 sm:p-6 border-t border-border/60">
              <h3 className="font-serif text-xl font-semibold">
                {current.title || "Untitled"}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {current.description || "Add description"}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function EmptyPreview({ type }: { type: "image" | "video" }) {
  return (
    <div className="text-center text-muted-foreground p-10">
      <p className="font-medium">Upload {type} here</p>
      <p className="text-xs mt-1">No file attached yet.</p>
    </div>
  );
}
