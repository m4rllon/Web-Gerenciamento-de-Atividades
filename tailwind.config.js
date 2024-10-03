/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : '#142841',
        'menu' : '#0F172A',
        'card': '#0F172A',
        'main_text' : '#E2E8F0',
        'checkedColorButton' : '#66BB6A',
      },
    },
  },
  plugins: [],
}

