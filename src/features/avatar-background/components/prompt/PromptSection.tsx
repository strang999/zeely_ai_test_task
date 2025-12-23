import { Loader2 } from "lucide-react";
import { AiIcon } from "../../../../shared/ui";
import { UI_LABELS } from "../../config";
import type { PromptSectionProps } from "../../types";
import actionBackIcon from "../../../../assets/icons/action_back.svg";
import actionNextIcon from "../../../../assets/icons/action_next.svg";

export function PromptSection({
  prompt,
  isRegenerating,
  canUndo,
  canRedo,
  onPromptChange,
  onRegenerate,
  onUndo,
  onRedo,
}: PromptSectionProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onPromptChange(e.target.value);
  };

  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-[14px] font-semibold leading-[1.2] text-black">
        {UI_LABELS.PROMPT.SECTION_TITLE}
      </h3>
      <div className="overflow-hidden rounded-[12px] border border-gray-light bg-white">
        <div className="h-[116px] px-4 pt-4">
          <textarea
            value={prompt}
            onChange={handleChange}
            placeholder={UI_LABELS.PROMPT.PLACEHOLDER}
            disabled={isRegenerating}
            aria-label={UI_LABELS.PROMPT.SECTION_TITLE}
            className="h-full w-full resize-none border-0 bg-transparent text-[14px] font-medium leading-[1.4] text-black placeholder:text-gray-mid focus:outline-none disabled:opacity-50"
          />
        </div>
        <div className="flex h-[63px] items-center justify-between bg-gradient-to-t from-white from-[70%] to-transparent pb-[9px] pl-[9px] pr-4 pt-5">
          <button
            type="button"
            onClick={onRegenerate}
            disabled={isRegenerating}
            aria-label={UI_LABELS.PROMPT.REGENERATE}
            className="inline-flex h-[34px] items-center gap-1 rounded-[10px] py-[7px] pl-[7px] pr-3 text-[12px] font-semibold text-black transition-colors hover:bg-gray-light disabled:opacity-50"
          >
            {isRegenerating ? (
              <Loader2 className="h-[18px] w-[18px] animate-spin text-accent" />
            ) : (
              <AiIcon className="h-[18px] w-[18px]" />
            )}
            <span>
              {isRegenerating
                ? UI_LABELS.PROMPT.REGENERATING
                : UI_LABELS.PROMPT.REGENERATE}
            </span>
          </button>
          <div className="flex items-center gap-2 pl-2">
            <button
              type="button"
              onClick={onUndo}
              disabled={!canUndo}
              aria-label={UI_LABELS.PROMPT.UNDO_LABEL}
              className="flex items-center justify-center overflow-hidden rounded-[10px] bg-white p-[7px] disabled:opacity-30"
            >
              <img src={actionBackIcon} alt="" className="size-5" />
            </button>
            <button
              type="button"
              onClick={onRedo}
              disabled={!canRedo}
              aria-label={UI_LABELS.PROMPT.REDO_LABEL}
              className="flex items-center justify-center overflow-hidden rounded-[10px] bg-white p-[7px] disabled:opacity-30"
            >
              <img src={actionNextIcon} alt="" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
