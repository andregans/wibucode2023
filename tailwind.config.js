/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        soft: {
          gray: '#F6F8FD'
        },
        dark: {
          DEFAULT: '#191919',
          purple: '#5B5575'
        },
        tosca: '#388794',
        navy: '#211B3D',
        gray: {
          DEFAULT: '#D2D1DA'
        }
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}
