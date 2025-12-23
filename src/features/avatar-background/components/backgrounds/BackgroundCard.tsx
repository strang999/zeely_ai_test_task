import { cn } from "../../../../shared/lib/cn";
import { UI_LABELS } from "../../config";
import type { BackgroundCardProps } from "../../types";

export function BackgroundCard({
  background,
  isSelected,
  onSelect,
}: BackgroundCardProps) {
  const { id, thumbnailUrl, isDefault, isGenerating, progress, estimatedTime } =
    background;

  if (isGenerating) {
    return (
      <div className="relative aspect-[112/198] w-full overflow-hidden rounded-[12px] bg-black">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="relative size-[65px]">
            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-20"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray={`${(progress || 0) * 1.005} 100`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[14px] font-medium">
              {progress}%
            </span>
          </div>
        </div>
        {estimatedTime && (
          <span className="absolute bottom-4 left-0 right-0 text-center text-[12px] font-semibold text-white">
            {estimatedTime}
          </span>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={cn(
        "relative aspect-[112/198] w-full overflow-hidden rounded-[12px] transition-all",
        "focus-visible:outline-none",
        isSelected && "rounded-[16px] border-2 border-black"
      )}
    >
      <img
        src={thumbnailUrl}
        alt={UI_LABELS.BACKGROUNDS.CARD_ALT}
        className="size-full object-cover"
      />
      {isDefault && (
        <span className="absolute left-2 top-2 rounded-[5px] border border-black/5 bg-white px-1 py-1.5 text-[10px] font-bold uppercase leading-none text-[#404040] backdrop-blur-[7.5px]">
          {UI_LABELS.BACKGROUNDS.DEFAULT_BADGE}
        </span>
      )}
    </button>
  );
}
