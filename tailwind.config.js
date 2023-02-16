/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#F0F2F5',
      },
      maxWidth: {
        // "nav": "360px"
      },
      fontFamily: {
        'body': ['Segoe UI Historic', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        'small': '898px',
      }
  },
},
  plugins: [],
}
