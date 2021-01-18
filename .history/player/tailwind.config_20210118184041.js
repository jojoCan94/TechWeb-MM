module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      text: {
        'big': '5000px'
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
