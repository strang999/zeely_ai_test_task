import { Undo2, Redo2, Loader2 } from "lucide-react";
import { AiIcon } from "../../../../shared/ui";
import { UI_LABELS } from "../../config";
import type { PromptSectionProps } from "../../types";

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
    <section className="px-5">
      <h3 className="mb-3 text-[14px] font-semibold leading-[1.2] text-black">
        {UI_LABELS.PROMPT.SECTION_TITLE}
      </h3>
      <div className="overflow-hidden rounded-lg border border-gray-light bg-white">
        <div className="px-4 pt-4">
          <textarea
            value={prompt}
            onChange={handleChange}
            placeholder={UI_LABELS.PROMPT.PLACEHOLDER}
            disabled={isRegenerating}
            aria-label={UI_LABELS.PROMPT.SECTION_TITLE}
            className="h-[116px] w-full resize-none border-0 bg-transparent text-[14px] font-medium leading-[1.4] text-black placeholder:text-gray-mid focus:outline-none disabled:opacity-50"
          />
        </div>
        <div className="relative flex items-center justify-between bg-gradient-to-t from-white from-70% to-transparent px-[9px] pb-[9px] pt-5">
          <button
            type="button"
            onClick={onRegenerate}
            disabled={isRegenerating}
            aria-label={UI_LABELS.PROMPT.REGENERATE}
            className="inline-flex items-center gap-1 rounded-md px-[7px] py-[7px] text-[12px] font-semibold text-black transition-colors hover:bg-gray-light disabled:opacity-50"
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
          <div className="flex items-center gap-2 pr-[7px]">
            <button
              type="button"
              onClick={onUndo}
              disabled={!canUndo}
              aria-label={UI_LABELS.PROMPT.UNDO_LABEL}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white p-[7px] disabled:opacity-30"
            >
              <Undo2 className="h-4 w-4 text-gray-mid" />
            </button>
            <button
              type="button"
              onClick={onRedo}
              disabled={!canRedo}
              aria-label={UI_LABELS.PROMPT.REDO_LABEL}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white p-[7px] disabled:opacity-30"
            >
              <Redo2 className="h-4 w-4 text-gray-mid" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
