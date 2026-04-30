import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#E8EDF4",
          100: "#D1DBE9",
          200: "#A3B7D3",
          300: "#7593BD",
          400: "#476FA7",
          500: "#0B1F3A",
          600: "#091932",
          700: "#07132A",
          800: "#050D22",
          900: "#03071A",
        },
        charcoal: {
          DEFAULT: "#1C1C1C",
          50: "#F5F5F5",
          100: "#E0E0E0",
          200: "#C0C0C0",
          300: "#A0A0A0",
          400: "#808080",
          500: "#1C1C1C",
          600: "#181818",
          700: "#141414",
          800: "#101010",
          900: "#0C0C0C",
        },
        offwhite: {
          DEFAULT: "#F5F5F5",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#EBEBEB",
          400: "#E0E0E0",
        },
        gold: {
          DEFAULT: "#C8A96A",
          50: "#FAF7F0",
          100: "#F5EFE1",
          200: "#EBDFC3",
          300: "#E1CFA5",
          400: "#D7BF87",
          500: "#C8A96A",
          600: "#B08E4A",
          700: "#8A6F3A",
          800: "#64502A",
          900: "#3E311A",
        },
        teal: {
          DEFAULT: "#3AAFA9",
          50: "#E6F7F6",
          100: "#CCEFEE",
          200: "#99DFDC",
          300: "#66CFCB",
          400: "#33BFB9",
          500: "#3AAFA9",
          600: "#2E8C87",
          700: "#236965",
          800: "#174643",
          900: "#0C2321",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

export default config
