import type { StylePreset, BackgroundItem } from "../types";

export const STYLE_PRESETS: StylePreset[] = [
  {
    id: "style-natural",
    name: "Natural",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop",
  },
  {
    id: "style-urban",
    name: "Urban",
    imageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=150&h=150&fit=crop",
  },
  {
    id: "style-minimal",
    name: "Minimal",
    imageUrl:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=150&h=150&fit=crop",
  },
  {
    id: "style-gradient",
    name: "Gradient",
    imageUrl:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=150&h=150&fit=crop",
  },
  {
    id: "style-studio",
    name: "Studio",
    imageUrl:
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=150&h=150&fit=crop",
  },
] as const;

export const INITIAL_BACKGROUNDS: BackgroundItem[] = [
  {
    id: "bg-generating",
    thumbnailUrl: "",
    isGenerating: true,
    progress: 25,
    estimatedTime: "1 minute left",
  },
  {
    id: "bg-default",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
    isDefault: true,
  },
  {
    id: "bg-1",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  },
  {
    id: "bg-2",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
  },
  {
    id: "bg-3",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop",
  },
  {
    id: "bg-4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
  },
];
