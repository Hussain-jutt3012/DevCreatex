/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: { extend: { colors: { brand: { DEFAULT: "#6366f1", dark: "#4f46e5" } }, boxShadow: { glow: "0 0 60px rgba(99,102,241,.22)" } } },
  plugins: []
}