import { X } from "lucide-react";
import { SheetTitle } from "../../../../shared/ui";
import { UI_LABELS } from "../../config";
import type { SidebarHeaderProps } from "../../types";

export function SidebarHeader({ title, onClose }: SidebarHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <SheetTitle className="font-italian text-[22px] font-bold leading-[1.2] text-black">
        {title}
      </SheetTitle>
      <button
        type="button"
        onClick={onClose}
        aria-label={UI_LABELS.SIDEBAR.CLOSE_BUTTON_LABEL}
        className="flex size-6 items-center justify-center transition-opacity hover:opacity-70"
      >
        <X className="size-6 text-black" strokeWidth={1.5} />
      </button>
    </header>
  );
}
