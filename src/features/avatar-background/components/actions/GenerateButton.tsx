import { AiIconSmall } from "../../../../shared/ui";
import { UI_LABELS } from "../../config";
import type { GenerateButtonProps } from "../../types";

export function GenerateButton({
  creditCost,
  isDisabled,
  onGenerate,
}: GenerateButtonProps) {
  return (
    <button
      type="button"
      onClick={onGenerate}
      disabled={isDisabled}
      aria-label={`${UI_LABELS.GENERATE.BUTTON_TEXT} ${creditCost} ${UI_LABELS.GENERATE.CREDIT_SUFFIX}`}
      className="flex h-[48px] w-full items-center justify-center gap-2 rounded-[100px] bg-black px-7 text-[14px] font-semibold leading-[0.8] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <AiIconSmall className="h-[13px] w-[12px]" />
      <span>
        {UI_LABELS.GENERATE.BUTTON_TEXT} {creditCost}{" "}
        {UI_LABELS.GENERATE.CREDIT_SUFFIX}
      </span>
    </button>
  );
}
