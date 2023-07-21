/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          white: '#F1F1F1',
          black: "#000000"
        },
        green: {
          green100: '#253E3B'
        }
      }
    },
  },
  plugins: [],
}

