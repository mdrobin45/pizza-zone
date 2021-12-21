module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widest: '0.5rem',
      wider:'0.1rem'
    },
    container: {
      padding:'2rem'
    },
    extend: {
      backgroundImage: {
        orderStepTopBg:`url('/src/images/order-top.png')`,
        orderStepBottomBg:`url('/src/images/order-bottom.png')`
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        primary:'#FD9D3E'
      },
      fontFamily: {
        secondary:"'Pacifico', cursive"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
