module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        White: 'hsl(0, 0%, 100%)',
        Grey: 'hsl(0, 0%, 50%)',
        Black: 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      }

    },
  },
  plugins: [],
}
