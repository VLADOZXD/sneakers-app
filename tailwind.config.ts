import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { xl: "1024px", lg: "768px", md: "640px", sm: "320px" },
    container: {
      screens: { xl: "1024px", lg: "768px", md: "640px", sm: "320px" },
    },
  },
  plugins: [],
};
export default config;
