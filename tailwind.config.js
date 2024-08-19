module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    colors: {
      'brown-50': '#ffe1cc',
      'brown-150': '#f8ad79',
      'brown-950': '#462b13',
      yellow: '#ffb700',
      white: '#fff',
    },
    extend: {
      padding: {
        138: '138px',
        102: '102px',
      },
      margin: {
        18: '18px'
      },
      backgroundImage: {
        'brown-gradient': 'linear-gradient(to bottom, #422410 100%, #2D1A0F 64%)',
      },
      fontSize: {
        42: '42px',
        50: '50px',
        21: '21px',
      },
      lineHeight: {
        56: '56px',
      },
      borderRadius: {
        10: '10px',
      },
    },
  },
  plugins: [],
}
