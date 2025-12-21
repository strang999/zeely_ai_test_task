import { X } from "lucide-react";
import { SheetTitle } from "../../../../shared/ui";
import { UI_LABELS } from "../../config";
import type { SidebarHeaderProps } from "../../types";

export function SidebarHeader({ title, onClose }: SidebarHeaderProps) {
  return (
    <header className="flex items-center justify-between px-5 pb-0 pt-8">
      <SheetTitle className="font-italian text-[22px] font-bold leading-[1.2] text-black">
        {title}
      </SheetTitle>
      <button
        type="button"
        onClick={onClose}
        aria-label={UI_LABELS.SIDEBAR.CLOSE_BUTTON_LABEL}
        className="flex h-6 w-6 items-center justify-center transition-opacity hover:opacity-70"
      >
        <X className="h-6 w-6 text-black" strokeWidth={1.5} />
      </button>
    </header>
  );
}
