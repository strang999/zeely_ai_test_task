import { cn } from "../../../../shared/lib/cn";

interface StylePresetCardProps {
  id: string;
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function StylePresetCard({
  id,
  name,
  imageUrl,
  isSelected,
  onSelect,
}: StylePresetCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={cn(
        "group relative aspect-square overflow-hidden rounded-xl border-2 transition-all",
        "hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2",
        isSelected
          ? "border-primary ring-2 ring-primary/20"
          : "border-transparent"
      )}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-full w-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
        <span className="text-xs font-medium text-white">{name}</span>
      </div>
    </button>
  );
}
