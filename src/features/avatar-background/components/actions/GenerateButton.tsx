import { AiIconSmall } from "../../../../shared/ui";
import { UI_LABELS } from "../../config";
import type { GenerateButtonProps } from "../../types";

export function GenerateButton({
  creditCost,
  isDisabled,
  onGenerate,
}: GenerateButtonProps) {
  return (
    <div className="px-5">
      <button
        type="button"
        onClick={onGenerate}
        disabled={isDisabled}
        aria-label={`${UI_LABELS.GENERATE.BUTTON_TEXT} ${creditCost} ${UI_LABELS.GENERATE.CREDIT_SUFFIX}`}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-pill bg-black text-[14px] font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <AiIconSmall className="h-[11px] w-[12px]" />
        <span>
          {UI_LABELS.GENERATE.BUTTON_TEXT} {creditCost}{" "}
          {UI_LABELS.GENERATE.CREDIT_SUFFIX}
        </span>
      </button>
    </div>
  );
}
