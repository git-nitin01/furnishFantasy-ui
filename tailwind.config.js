/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'woody': 'linear-gradient(135deg, #8B4513 0%, #C19A6B 20%, #D2B48C 50%, #C19A6B 80%, #8B4513 100%)'
      },
    },
  },
  plugins: [],
}
