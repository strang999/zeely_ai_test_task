import { useCallback, useMemo } from "react";
import { useBackgroundStore } from "../store/background-store";
import { GENERATION_CONFIG } from "../config";

/**
 * Custom hook that encapsulates all avatar background generation logic
 * Provides a clean interface for components to interact with the store
 */
export function useAvatarGenerator() {
  const {
    isOpen,
    prompt,
    backgrounds,
    selectedBackgroundId,
    selectedStyleId,
    isGenerating,
    isRegenerating,
    generatedImage,
    error,
    openSidebar,
    closeSidebar,
    setPrompt,
    undo,
    redo,
    canUndo,
    canRedo,
    regeneratePrompt,
    generateBackground,
    selectBackground,
    selectStyle,
  } = useBackgroundStore();

  const isPromptEmpty = useMemo(() => !prompt.trim(), [prompt]);

  const isGenerateDisabled = useMemo(
    () => isGenerating || isPromptEmpty,
    [isGenerating, isPromptEmpty]
  );

  const handlePromptChange = useCallback(
    (value: string) => {
      setPrompt(value);
    },
    [setPrompt]
  );

  const handleGenerate = useCallback(() => {
    if (!isGenerateDisabled) {
      generateBackground();
    }
  }, [generateBackground, isGenerateDisabled]);

  const handleRegenerate = useCallback(() => {
    if (!isRegenerating) {
      regeneratePrompt();
    }
  }, [regeneratePrompt, isRegenerating]);

  const handleUndo = useCallback(() => {
    if (canUndo()) {
      undo();
    }
  }, [undo, canUndo]);

  const handleRedo = useCallback(() => {
    if (canRedo()) {
      redo();
    }
  }, [redo, canRedo]);

  const handleSelectBackground = useCallback(
    (id: string) => {
      selectBackground(id);
    },
    [selectBackground]
  );

  const handleSelectStyle = useCallback(
    (id: string) => {
      selectStyle(id);
    },
    [selectStyle]
  );

  const handleCloseSidebar = useCallback(() => {
    closeSidebar();
  }, [closeSidebar]);

  const handleOpenSidebar = useCallback(() => {
    openSidebar();
  }, [openSidebar]);

  return {
    isOpen,
    prompt,
    backgrounds,
    selectedBackgroundId,
    selectedStyleId,
    isGenerating,
    isRegenerating,
    generatedImage,
    error,
    isPromptEmpty,
    isGenerateDisabled,
    canUndoPrompt: canUndo(),
    canRedoPrompt: canRedo(),
    creditCost: GENERATION_CONFIG.CREDIT_COST,
    handleOpenSidebar,
    handleCloseSidebar,
    handlePromptChange,
    handleGenerate,
    handleRegenerate,
    handleUndo,
    handleRedo,
    handleSelectBackground,
    handleSelectStyle,
  } as const;
}

export type UseAvatarGeneratorReturn = ReturnType<typeof useAvatarGenerator>;
