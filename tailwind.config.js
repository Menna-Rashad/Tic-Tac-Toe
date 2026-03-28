/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        board: '#2B0040',
        background: '#5A1E76',
        square: '#43115B',
        yellow: '#DCBF3F',
        skyBlue: '#72CFF9',
        new_game_hover: '#C5A0D7'
      },
    },
  },
  plugins: [],
}