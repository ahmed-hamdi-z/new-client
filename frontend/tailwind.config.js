/** @type {import('tailwindcss').Config} */

// Custom Config
const colors = require('./config/tailwind/colors');


export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'ss': "url('./public/images/nn.jpg')",
      },
      colors,
    },
  },
  plugins: [],
}

