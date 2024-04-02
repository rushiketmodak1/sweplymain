/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
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
          400: '#6F7582'
        },
        'sweply-blue':{
          400: '#EBF7FF',
          500: '#1081CC',
          600: '#14A1FF'
        },
        'sweply-purple':{
          500: '#754FCC'
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
