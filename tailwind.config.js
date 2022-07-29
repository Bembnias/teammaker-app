/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary-dark': '#1E1E1E',
      'secondary-dark': '#9B9B9B',
      'pinkish': '#F7F5FF',
      'primary': '#892CDC',
      'white': '#FFFFFF',
      'yellow': '#DE9B35',
      'black': '#000000',
      'red': '#DE0000',
      'green': '#39FF13'
    }
  },
  plugins: [],
}
