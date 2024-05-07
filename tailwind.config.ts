import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "520px",
        xx: "400px",
      },
      colors: {
        "background-color": "#2B2D31",
        "btn-color": "rgba(60,60,60,0.5)",
        "primary-1": "#D91820",
        "primary-2": "#F15A24",
        "background-purple": "#33245D",
        "background-blue": "#37719F",
        "background-green": "#33806E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
