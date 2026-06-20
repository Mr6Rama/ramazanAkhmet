import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { MediaSlot as MediaSlotData } from "../data/profile";

// Server component: checks whether the expected file actually exists under
// /public. If it does, render it; otherwise show a styled Liquid Glass
// "awaiting" placeholder with the exact path to drop the file at. This is what
// makes the "just add the file, no code changes" workflow possible.
function fileExists(src: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
  } catch {
    return false;
  }
}

export function MediaSlot({ src, alt, aspectRatio, caption }: MediaSlotData) {
  const available = Boolean(src) && fileExists(src as string);
  const isSvg = src?.toLowerCase().endsWith(".svg");

  return (
    <figure className="overflow-hidden rounded-2xl">
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ aspectRatio }}
      >
        {available && src ? (
          isSvg ? (
            // SVG logos: render directly to avoid the image optimizer.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt} className="h-full w-full object-contain p-4" />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )
        ) : (
          <div className="glass flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
            <span
              aria-hidden
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line/70 bg-white/60 text-muted"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </span>
            <span className="text-xs leading-5 text-muted">{caption ?? alt}</span>
            {src ? (
              <span className="font-mono text-[10px] leading-4 text-muted/70">
                Awaiting: {src}
              </span>
            ) : null}
          </div>
        )}
      </div>
      {caption && available ? (
        <figcaption className="mt-2 text-xs leading-5 text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
