import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "Kanit,regular",
      },
      colors: {
        text: "#e1def7",
        background: "#04040f",
        primary: "#9089e1",
        secondary: "#88225d",
        accent: "#d3516f",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
