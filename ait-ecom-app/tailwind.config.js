/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pimary' : '#F6F9FC',
        'secondary': '#FFFFFF',
        'main': '#879AB0',
        'main-text': '#212529',
        'badge-color': '#0F3460',
      }
    },
  },
  plugins: [],
}

