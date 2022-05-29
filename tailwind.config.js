module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  //purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
      keyframes: {
        shakeLeftRight: {
          '10%, 90%': {
            transform: 'translateX(-1px)'
          },
          '20%, 80%': {
            transform: 'translateX(2px)'
          },
          '30%, 50%, 70%': {
            transform: 'translateX(-4px)'
          },
          '40%, 60%': {
            transform: 'translateX(4px)'
          }
        }
      },
      animation: {
        shakeLeftRight: 'shakeLeftRight 1s ease-in-out infinite'
      }
    },
    plugins: [
      require('tailwindcss-filters'),
    ],
  }
}