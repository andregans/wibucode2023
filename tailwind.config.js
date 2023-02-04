/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        soft: {
          gray: '#F6F8FD',
          tosca: '#5AA4B0'
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
      },
      screens: {
        md: '928px'
      },
      keyframes: {
        movex: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-75%)' },
        },
        movey: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-35%)' },
        },
        'movey-lg': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-75%)' },
        },
        'movex-sm': {
          '0%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(-10%)' },
        }
      },
      animation: {
        movex: 'movex 8s ease-in-out infinite alternate',
        movey: 'movey 8s infinite alternate',
        'movey-lg': 'movey-lg 40s infinite alternate',
        'movex-sm': 'movex-sm 3s ease-in-out infinite alternate',
      }
    },
    
  },
  plugins: [],
}
