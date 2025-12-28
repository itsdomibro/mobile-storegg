/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",              // Root App file
    "./app/**/*.{js,jsx,ts,tsx}",         // Expo Router screens
    "./components/**/*.{js,jsx,ts,tsx}",  // reusable components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
