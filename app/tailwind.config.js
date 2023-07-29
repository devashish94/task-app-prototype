/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '300px',
        'split-display': '650px',
        'large': '920px',
        'desktop': '1800px',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      },
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      }
    },
  },
  plugins: [
  ],
}
