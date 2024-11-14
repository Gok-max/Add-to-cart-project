/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        'custom-blue': '#0070cc',
        'corvid-bg': 'var(--corvid-background-color, rgba(var(--bg, 0, 0, 0), var(--alpha-bg, 1)))',
      },
    },
  },
  plugins: [],
}