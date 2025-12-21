import { useBackgroundStore } from "../../store/background-store";
import { StylePresetCard } from "./StylePresetCard";
import { STYLE_PRESETS } from "../../constants";

export function StylePresetsSection() {
  const { selectedStyleId, selectStyle } = useBackgroundStore();

  return (
    <section className="px-6">
      <h3 className="mb-3 text-sm font-medium text-muted-foreground">
        Style presets
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {STYLE_PRESETS.map((preset) => (
          <StylePresetCard
            key={preset.id}
            id={preset.id}
            name={preset.name}
            imageUrl={preset.imageUrl}
            isSelected={selectedStyleId === preset.id}
            onSelect={selectStyle}
          />
        ))}
      </div>
    </section>
  );
}
