export interface BackgroundItem {
  readonly id: string;
  readonly thumbnailUrl: string;
  readonly isDefault?: boolean;
  readonly isGenerating?: boolean;
  readonly progress?: number;
  readonly estimatedTime?: string;
}

export interface StylePreset {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
}

export interface PromptHistoryEntry {
  readonly id: string;
  readonly text: string;
  readonly timestamp: number;
}

export interface SidebarState {
  readonly isOpen: boolean;
  readonly prompt: string;
  readonly promptHistory: PromptHistoryEntry[];
  readonly historyIndex: number;
}

export interface GeneratorState {
  readonly isGenerating: boolean;
  readonly isRegenerating: boolean;
  readonly generatedImage: string | null;
  readonly error: string | null;
  readonly generationProgress: number;
}

export interface SelectionState {
  readonly backgrounds: BackgroundItem[];
  readonly selectedBackgroundId: string | null;
  readonly selectedStyleId: string | null;
}

export interface StoreActions {
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
  setPrompt: (prompt: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  regeneratePrompt: () => Promise<void>;
  generateBackground: () => Promise<void>;
  selectBackground: (id: string) => void;
  selectStyle: (id: string) => void;
}

export interface BackgroundStore
  extends SidebarState,
    GeneratorState,
    SelectionState,
    StoreActions {}

export interface SidebarHeaderProps {
  readonly title: string;
  readonly onClose: () => void;
}

export interface PromptSectionProps {
  readonly prompt: string;
  readonly isRegenerating: boolean;
  readonly canUndo: boolean;
  readonly canRedo: boolean;
  readonly onPromptChange: (value: string) => void;
  readonly onRegenerate: () => void;
  readonly onUndo: () => void;
  readonly onRedo: () => void;
}

export interface GenerateButtonProps {
  readonly creditCost: number;
  readonly isDisabled: boolean;
  readonly onGenerate: () => void;
}

export interface BackgroundCardProps {
  readonly background: BackgroundItem;
  readonly isSelected: boolean;
  readonly onSelect: (id: string) => void;
}
