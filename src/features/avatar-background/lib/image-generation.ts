/**
 * Constructs a Pollinations.ai image generation URL for avatar backgrounds
 * @param prompt - User's text prompt describing the background
 * @param style - Optional style name to append
 * @returns Pollinations.ai URL for background image generation
 */
export function constructImageURL(
  prompt: string,
  style?: string | null
): string {
  const backgroundContext =
    "professional background scene for portrait photo, no people, no faces, empty background setting";
  const styleText = style ? `${style} style` : "";
  const fullPrompt = `${backgroundContext}, ${prompt}${
    styleText ? `, ${styleText}` : ""
  }`;
  const encodedPrompt = encodeURIComponent(fullPrompt);
  const seed = Math.floor(Math.random() * 1000000);

  return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=600&height=800&seed=${seed}&nologo=true`;
}

/**
 * Preloads an image and returns a promise that resolves when loaded
 * @param url - Image URL to preload
 * @returns Promise that resolves with the URL when image is loaded
 */
export function preloadImage(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve(url);
    };

    img.onerror = () => {
      reject(new Error("Failed to load generated image"));
    };

    img.src = url;
  });
}

/**
 * Generates a creative prompt for avatar background using Pollinations text API
 * @returns Promise that resolves with a generated prompt string
 */
export async function generatePromptText(): Promise<string> {
  const systemPrompt =
    "You are a creative assistant that generates short, vivid descriptions for portrait photo backgrounds. Generate ONE short description (max 20 words) for a professional portrait background. Focus on lighting, atmosphere, and setting. Do not include people or faces. Just output the description, nothing else.";

  const userPrompt =
    "Generate a unique, creative background description for a professional portrait photo.";

  const seed = Math.floor(Math.random() * 1000000);

  const url = `https://text.pollinations.ai/${encodeURIComponent(
    userPrompt
  )}?system=${encodeURIComponent(systemPrompt)}&seed=${seed}&json=false`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to generate prompt");
    }
    const text = await response.text();
    return text.trim().replace(/^["']|["']$/g, "");
  } catch (error) {
    throw new Error("Failed to generate prompt");
  }
}
