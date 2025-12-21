import { Image } from "lucide-react";
import {
  BackgroundSidebar,
  useBackgroundStore,
  UI_LABELS,
  GENERATED_BACKGROUND_ID,
} from "./features/avatar-background";
import avatarImage from "./assets/avatar/Creative_card.png";

function App() {
  const openSidebar = useBackgroundStore((state) => state.openSidebar);
  const backgrounds = useBackgroundStore((state) => state.backgrounds);
  const generatedImage = useBackgroundStore((state) => state.generatedImage);
  const selectedBackgroundId = useBackgroundStore(
    (state) => state.selectedBackgroundId
  );

  const selectedBackground = backgrounds.find(
    (bg) => bg.id === selectedBackgroundId
  );

  const isGeneratedSelected = selectedBackgroundId === GENERATED_BACKGROUND_ID;

  const backgroundUrl =
    isGeneratedSelected && generatedImage
      ? generatedImage
      : selectedBackground?.thumbnailUrl;

  const showBackground =
    backgroundUrl && (isGeneratedSelected || !selectedBackground?.isDefault);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <div className="relative">
        <div className="aspect-[9/16] w-80 overflow-hidden rounded-2xl bg-zinc-800">
          <img
            src={showBackground ? backgroundUrl : avatarImage}
            alt={UI_LABELS.MAIN.AVATAR_ALT}
            className="h-full w-full object-cover"
          />
        </div>

        <button
          onClick={openSidebar}
          className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-lg transition-transform hover:scale-105"
        >
          <Image className="h-4 w-4" />
          {UI_LABELS.MAIN.CHANGE_BUTTON}
        </button>
      </div>

      <BackgroundSidebar />
    </div>
  );
}

export default App;
