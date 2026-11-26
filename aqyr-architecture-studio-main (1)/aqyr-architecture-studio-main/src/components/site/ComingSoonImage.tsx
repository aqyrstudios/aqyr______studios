import markAsset from "@/assets/aqyr-mark.png.asset.json";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  label?: string;
  size?: "sm" | "lg";
};

/** Branded stand-in shown wherever a photo will go later. */
export function ComingSoonImage({ className, label, size = "sm" }: Props) {
  return (
    <div
      role="img"
      aria-label={label ? `${label} — image coming soon` : "Image coming soon"}
      className={cn("hatch relative flex items-center justify-center overflow-hidden", className)}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <img
          src={markAsset.url}
          alt=""
          className={cn("opacity-90", size === "lg" ? "h-20 w-20 md:h-28 md:w-28" : "h-12 w-12")}
        />
        <span
          className={cn(
            "font-display font-semibold uppercase tracking-[0.2em] text-ink",
            size === "lg" ? "text-sm md:text-base" : "text-[0.7rem]",
          )}
        >
          Image coming soon
        </span>
      </div>
    </div>
  );
}
