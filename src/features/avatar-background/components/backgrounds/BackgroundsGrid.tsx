import { useAvatarGenerator } from "../../hooks";
import { UI_LABELS, GENERATED_BACKGROUND_ID } from "../../config";
import { BackgroundCard } from "./BackgroundCard";
import type { BackgroundItem } from "../../types";

export function BackgroundsGrid() {
  const {
    backgrounds,
    selectedBackgroundId,
    handleSelectBackground,
    isGenerating,
    generatedImage,
    generationProgress,
  } = useAvatarGenerator();

  const estimatedTimeLeft = isGenerating
    ? generationProgress < 30
      ? "1 minute left"
      : generationProgress < 60
      ? "30 seconds left"
      : "Almost done..."
    : "";

  const generatedBackgroundItem: BackgroundItem | null =
    isGenerating || generatedImage
      ? {
          id: GENERATED_BACKGROUND_ID,
          thumbnailUrl: generatedImage || "",
          isGenerating,
          progress: Math.round(generationProgress),
          estimatedTime: estimatedTimeLeft,
        }
      : null;

  const allBackgrounds = generatedBackgroundItem
    ? [generatedBackgroundItem, ...backgrounds.filter((bg) => !bg.isGenerating)]
    : backgrounds.filter((bg) => !bg.isGenerating);

  return (
    <section aria-label={UI_LABELS.BACKGROUNDS.SECTION_TITLE}>
      <h3 className="mb-3 text-[14px] font-semibold leading-[1.2] text-black">
        {UI_LABELS.BACKGROUNDS.SECTION_TITLE}
      </h3>
      <div className="grid grid-cols-3 gap-[12px] pb-5">
        {allBackgrounds.map((bg) => (
          <BackgroundCard
            key={bg.id}
            background={bg}
            isSelected={selectedBackgroundId === bg.id}
            onSelect={handleSelectBackground}
          />
        ))}
      </div>
    </section>
  );
}
