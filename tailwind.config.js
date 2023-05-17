/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      "red": "#FF0000",
      "my-pink" : "#ff6799",
      "my-blue": "#4acdd5",
      "my-yellow" : "#fdb819",
    },
  },
  plugins: [require("daisyui")],
}

