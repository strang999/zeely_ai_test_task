import { UI_LABELS } from "../../config";
import type { GeneratedImageProps } from "../../types";

export function GeneratedImageSection({
  imageUrl,
  isGenerating,
  error,
}: GeneratedImageProps) {
  if (!imageUrl && !isGenerating && !error) {
    return null;
  }

  return (
    <section className="px-5">
      <h3 className="mb-3 text-[14px] font-semibold leading-[1.2] text-black">
        {UI_LABELS.BACKGROUNDS.GENERATED_TITLE}
      </h3>

      {isGenerating && (
        <div className="flex aspect-[3/4] w-full items-center justify-center rounded-lg bg-black">
          <div className="flex flex-col items-center gap-3 text-white">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-white border-t-accent" />
            <span className="text-[12px] font-medium">
              {UI_LABELS.BACKGROUNDS.LOADING_TEXT}
            </span>
          </div>
        </div>
      )}

      {error && !isGenerating && (
        <div className="flex aspect-[3/4] w-full items-center justify-center rounded-lg bg-red-50 p-4">
          <p className="text-center text-[12px] text-red-600">{error}</p>
        </div>
      )}

      {imageUrl && !isGenerating && (
        <div className="overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={UI_LABELS.BACKGROUNDS.GENERATED_ALT}
            className="aspect-[3/4] w-full object-cover"
          />
        </div>
      )}
    </section>
  );
}
