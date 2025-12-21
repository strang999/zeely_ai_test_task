import { useAvatarGenerator } from "../../hooks";
import { UI_LABELS } from "../../config";
import { BackgroundCard } from "./BackgroundCard";

export function BackgroundsGrid() {
  const { backgrounds, selectedBackgroundId, handleSelectBackground } =
    useAvatarGenerator();

  return (
    <section
      className="px-5 pb-5"
      aria-label={UI_LABELS.BACKGROUNDS.SECTION_TITLE}
    >
      <h3 className="mb-3 text-[14px] font-semibold leading-[1.2] text-black">
        {UI_LABELS.BACKGROUNDS.SECTION_TITLE}
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {backgrounds.map((bg) => (
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
