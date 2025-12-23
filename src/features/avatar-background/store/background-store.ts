import { create } from "zustand";
import type { BackgroundStore, PromptHistoryEntry } from "../types";
import { INITIAL_PROMPT, STYLE_PRESETS, INITIAL_BACKGROUNDS } from "../config";
import { constructImageURL, preloadImage, generatePromptText } from "../lib";

const createHistoryEntry = (text: string): PromptHistoryEntry => ({
  id: crypto.randomUUID(),
  text,
  timestamp: Date.now(),
});

export const useBackgroundStore = create<BackgroundStore>((set, get) => ({
  isOpen: false,
  prompt: INITIAL_PROMPT,
  promptHistory: [createHistoryEntry(INITIAL_PROMPT)],
  historyIndex: 0,
  backgrounds: INITIAL_BACKGROUNDS,
  selectedBackgroundId: "bg-default",
  selectedStyleId: null,
  isGenerating: false,
  isRegenerating: false,
  generatedImage: null,
  error: null,
  generationProgress: 0,

  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),

  setPrompt: (prompt) => {
    const { promptHistory, historyIndex } = get();
    const newHistory = promptHistory.slice(0, historyIndex + 1);
    newHistory.push(createHistoryEntry(prompt));

    set({
      prompt,
      promptHistory: newHistory,
      historyIndex: newHistory.length - 1,
    });
  },

  undo: () => {
    const { historyIndex, promptHistory } = get();
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      set({
        historyIndex: newIndex,
        prompt: promptHistory[newIndex].text,
      });
    }
  },

  redo: () => {
    const { historyIndex, promptHistory } = get();
    if (historyIndex < promptHistory.length - 1) {
      const newIndex = historyIndex + 1;
      set({
        historyIndex: newIndex,
        prompt: promptHistory[newIndex].text,
      });
    }
  },

  canUndo: () => get().historyIndex > 0,
  canRedo: () => get().historyIndex < get().promptHistory.length - 1,

  regeneratePrompt: async () => {
    set({ isRegenerating: true });
    try {
      const newPrompt = await generatePromptText();
      get().setPrompt(newPrompt);
    } catch {
      // If AI fails, keep current prompt - no hardcoded fallbacks needed
      // User can manually type or try regenerate again
    } finally {
      set({ isRegenerating: false });
    }
  },

  generateBackground: async () => {
    const { prompt, selectedStyleId } = get();
    if (!prompt.trim()) return;

    set({
      isGenerating: true,
      error: null,
      generatedImage: null,
      generationProgress: 0,
    });

    const progressInterval = setInterval(() => {
      const currentProgress = get().generationProgress;
      if (currentProgress < 90) {
        set({ generationProgress: currentProgress + Math.random() * 15 });
      }
    }, 500);

    try {
      const selectedStyle = STYLE_PRESETS.find((s) => s.id === selectedStyleId);
      const styleName = selectedStyle?.name || null;

      const imageUrl = constructImageURL(prompt, styleName);

      const loadedUrl = await preloadImage(imageUrl);

      clearInterval(progressInterval);
      set({
        isGenerating: false,
        generatedImage: loadedUrl,
        generationProgress: 100,
      });
    } catch (error) {
      clearInterval(progressInterval);
      set({
        isGenerating: false,
        error:
          error instanceof Error ? error.message : "Failed to generate image",
        generationProgress: 0,
      });
    }
  },

  selectBackground: (id) => set({ selectedBackgroundId: id }),
  selectStyle: (id) => set({ selectedStyleId: id }),
}));
