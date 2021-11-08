module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      fontFamily: {
       Sora: ['Sora', 'sans-serif'],
       Roboto: ['Roboto', 'sans-serif'],
      },
    },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
  }
}