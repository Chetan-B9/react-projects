/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#F6F9FC',
        'secondary': '#FFFFFF',
        'main': '#0F3460',
        'main-text': '#212529',
        'footer-text': '#879AB0',
      }
    },
  },
  plugins: [],
}

