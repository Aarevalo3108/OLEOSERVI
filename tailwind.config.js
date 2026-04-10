/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'n1': '#262324',
        'n2': '#0D0C0C',
        'n3': '#595859',
        'n4': '#F20505',
        'n5': '#F2F2F2',
      },
    },
  },
  plugins: [],
}

