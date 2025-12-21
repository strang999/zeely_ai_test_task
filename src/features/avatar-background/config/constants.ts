export const UI_LABELS = {
  SIDEBAR: {
    TITLE: "Change background",
    CLOSE_BUTTON_LABEL: "Close sidebar",
  },
  PROMPT: {
    SECTION_TITLE: "Background idea",
    PLACEHOLDER: "Describe your background idea...",
    REGENERATE: "Regenerate",
    REGENERATING: "Generating...",
    UNDO_LABEL: "Undo",
    REDO_LABEL: "Redo",
  },
  GENERATE: {
    BUTTON_TEXT: "Generate BG for",
    CREDIT_SUFFIX: "credit",
  },
  BACKGROUNDS: {
    SECTION_TITLE: "Your backgrounds",
    GENERATED_TITLE: "Generated background",
    DEFAULT_BADGE: "default",
    LOADING_TEXT: "Generating...",
    CARD_ALT: "Background option",
    GENERATED_ALT: "Generated background",
  },
} as const;

export const GENERATION_CONFIG = {
  CREDIT_COST: 1,
  IMAGE_WIDTH: 600,
  IMAGE_HEIGHT: 800,
  FAILURE_RATE: 0.1,
} as const;

export const INITIAL_PROMPT =
  "Professional studio portrait background with soft lighting and neutral tones";

export const API_CONFIG = {
  POLLINATIONS_IMAGE_BASE: "https://image.pollinations.ai/prompt",
  POLLINATIONS_TEXT_BASE: "https://text.pollinations.ai",
  BACKGROUND_CONTEXT:
    "professional background scene for portrait photo, no people, no faces, empty background setting",
} as const;
