/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aryoraGreen: "#0B3D2E",
        aryoraCream: "#FAF7F2",
        aryoraGold: "#D4AF37",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "Segoe UI", "Arial"],
      }
    },
  },
  plugins: [],
}