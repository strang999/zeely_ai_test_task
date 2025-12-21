/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Italian Plate No2 Expanded"', "system-ui", "sans-serif"],
        italian: ['"Italian Plate No2 Expanded"', "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F4F4F5",
          foreground: "#71717A",
        },
        border: "#F2F4F6",
        background: "#FFFFFF",
        foreground: "#000000",
        gray: {
          light: "#F2F4F6",
          mid: "#CAD4DD",
          dark: "#404040",
        },
        accent: {
          DEFAULT: "#10B981",
        },
      },
      spacing: {
        'sidebar': '400px',
        '4.5': '18px',
      },
      borderRadius: {
        'sm': '5px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        'pill': '100px',
      },
      boxShadow: {
        'sidebar': '0 0 40px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
