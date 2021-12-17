module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widest:'0.5rem'
    },
    container: {
      padding:'2rem'
    },
    extend: {
      colors: {
        primary:'#FD9D3E'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
