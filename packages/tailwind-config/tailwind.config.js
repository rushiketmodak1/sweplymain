/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    '../../apps/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray': {
          EEF0F5: '#EEF0F5',
          E0E3EB: '#E0E3EB',
          F5F6FA: '#F5F6FA',
          C5C9D5: '#C5C9D5',          
          FAFBFC: '#FAFBFC',
          eef0f5: '#eef0f5',
          400: '#6F7582',
          500: '#333B4A'
        },
        'sweply-blue':{
          400: '#EBF7FF',
          500: '#1081CC',
          600: '#14A1FF'
        },
        'sweply-purple':{
          500: '#754FCC',
          600: '#9263FF'
        }
      },
      fontSize: {
        '15px': '15px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}