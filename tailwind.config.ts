import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(165, 92%, 19%)",
          100: "#047358",
          400: "#045C47",
          700: "#033F30",
        },
        accent: {
          green: "#f8fffa",
          white: "#F6F8FC",
        },
        dark: "#1E1E1E",
        danger: "#C03026",
        success: "#34A853",
        pending: "#E5CF0D",
      },
    },
  },
  plugins: [],
};
export default config;
