import { Sheet, SheetContent, SheetDescription } from "../../../../shared/ui";
import { useAvatarGenerator } from "../../hooks";
import { UI_LABELS } from "../../config";
import { SidebarHeader } from "./SidebarHeader";
import { PromptSection } from "../prompt";
import { GenerateButton } from "../actions";
import { BackgroundsGrid } from "../backgrounds";

export function BackgroundSidebar() {
  const {
    isOpen,
    prompt,
    isRegenerating,
    canUndoPrompt,
    canRedoPrompt,
    isGenerateDisabled,
    creditCost,
    handleCloseSidebar,
    handlePromptChange,
    handleGenerate,
    handleRegenerate,
    handleUndo,
    handleRedo,
  } = useAvatarGenerator();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && handleCloseSidebar()}>
      <SheetContent className="flex w-full flex-col overflow-hidden p-0 sm:w-[400px]">
        <div className="px-5 pt-8">
          <SidebarHeader
            title={UI_LABELS.SIDEBAR.TITLE}
            onClose={handleCloseSidebar}
          />
        </div>
        <SheetDescription className="sr-only">
          Generate and select avatar backgrounds
        </SheetDescription>

        <div className="flex flex-1 flex-col overflow-y-auto px-5 pt-[50px]">
          <PromptSection
            prompt={prompt}
            isRegenerating={isRegenerating}
            canUndo={canUndoPrompt}
            canRedo={canRedoPrompt}
            onPromptChange={handlePromptChange}
            onRegenerate={handleRegenerate}
            onUndo={handleUndo}
            onRedo={handleRedo}
          />
          <div className="pt-6">
            <GenerateButton
              creditCost={creditCost}
              isDisabled={isGenerateDisabled}
              onGenerate={handleGenerate}
            />
          </div>
          <div className="pt-[40px]">
            <BackgroundsGrid />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
