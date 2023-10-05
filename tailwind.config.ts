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
          100: "hsl(137, 100%, 99%)",
          400: "hsl(165, 93%, 28%)",
          700: "hsl(165, 91%, 13%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
