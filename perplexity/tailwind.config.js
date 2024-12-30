/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom1: "#202222",
        custom2: "#191a1a",
      },
      maxWidth: {
        "640px": "640px",
      },
      gridTemplateColumns: {
        pc: "240px auto",
      },
      gridTemplateRows: {
        pc: "auto  40px",
      },
    },
  },
  plugins: [],
};
