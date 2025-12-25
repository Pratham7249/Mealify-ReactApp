/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
            DEFAULT: '#f97316', // orange-500
            dark: '#ea580c', // orange-600
        }
      }
    },
  },
  plugins: [],
}
