import { Sheet, SheetContent, SheetDescription } from "../../../../shared/ui";
import { useAvatarGenerator } from "../../hooks";
import { UI_LABELS, GENERATED_BACKGROUND_ID } from "../../config";
import { SidebarHeader } from "./SidebarHeader";
import { PromptSection } from "../prompt";
import { GenerateButton } from "../actions";
import { GeneratedImageSection } from "../generated";
import { BackgroundsGrid } from "../backgrounds";

export function BackgroundSidebar() {
  const {
    isOpen,
    prompt,
    isGenerating,
    isRegenerating,
    generatedImage,
    error,
    selectedBackgroundId,
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
    handleSelectBackground,
  } = useAvatarGenerator();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && handleCloseSidebar()}>
      <SheetContent className="flex flex-col overflow-hidden">
        <SidebarHeader
          title={UI_LABELS.SIDEBAR.TITLE}
          onClose={handleCloseSidebar}
        />
        <SheetDescription className="sr-only">
          Generate and select avatar backgrounds
        </SheetDescription>

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto pt-6">
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
          <GenerateButton
            creditCost={creditCost}
            isDisabled={isGenerateDisabled}
            onGenerate={handleGenerate}
          />
          <GeneratedImageSection
            imageUrl={generatedImage}
            isGenerating={isGenerating}
            error={error}
            isSelected={selectedBackgroundId === GENERATED_BACKGROUND_ID}
            onSelect={() => handleSelectBackground(GENERATED_BACKGROUND_ID)}
          />
          <BackgroundsGrid />
        </div>
      </SheetContent>
    </Sheet>
  );
}
