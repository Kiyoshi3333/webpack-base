const numbers = [100, 200, 300, 400, 500, 1000, 2000]
const pixels = numbers.reduce(
  (carry, pixel) => ({ ...carry, [`${pixel}px`]: `${pixel}px` }),
  {}
)

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#297a89',
        main_hover: '#4eb7cb',
      },
      height: pixels,
      width: pixels,
    },
  },
  variants: [],
  plugins: [],
}
