/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "14px 17px 40px 4px",
        inset: "inset 0px 18px 22px",
        darkinset: "0px 4px 4px inset",
      },
      borderRadius: {
        primary: "20px",
      },
    },
    screens: {
      sm: "576px",
      "sm-max": { max: "576px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "992px",
      "lg-max": { max: "992px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { max: "1320px" },
      "3xl": "1600px",
      "3xl-max": { max: "1600px" },
      "4xl": "1850px",
      "4xl-max": { max: "1850px" },
    },
    colors: () => ({
      white: "#ffffff",
      lightPrimary: "#F4F7FE",
      blueSecondary: "#4318FF",
      brandLinear: "#868CFF",
      gray: {
        50: "#f8f9fa",
        100: "#edf2f7",
        200: "#e9ecef",
        300: "#cbd5e0",
        400: "#a0aec0",
        500: "#adb5bd",
        600: "#a3aed0",
        700: "#707eae",
        800: "#252f40",
        900: "#1b2559",
      },
      navy: {
        50: "#d0dcfb",
        100: "#aac0fe",
        200: "#a3b9f8",
        300: "#728fea",
        400: "#3652ba",
        500: "#1b3bbb",
        600: "#24388a",
        700: "#1B254B",
        800: "#111c44",
        900: "#0b1437",
      },
      red: {
        50: "#ee5d501a",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#f53939",
        600: "#ea0606",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7928ca",
        800: "#6b21a8",
        900: "#581c87",
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ff0080",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
      },
      brand: {
        50: "#E9E3FF",
        100: "#C0B8FE",
        200: "#A195FD",
        300: "#8171FC",
        400: "#7551FF",
        500: "#422AFB",
        600: "#3311DB",
        700: "#2111A5",
        800: "#190793",
        900: "#11047A",
      },
      shadow: {
        500: "rgba(112, 144, 176, 0.08)",
      },
    }),
  },
  plugins: [],
}

