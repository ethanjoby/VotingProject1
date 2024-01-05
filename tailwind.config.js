/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FFFFFF',
        gold: {
          500: '#ffd700', // Or any gold color you prefer
        },
      },gradientColorStops: (theme) => ({
        'secondary': {
          'start': theme('colors.gold.500'), // Start color
          'end': theme('colors.pink.500'),  // End color
        },
      }),

    },
  },
  plugins: [],
}
