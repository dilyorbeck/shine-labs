module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    colors: {
      'brown-50': '#ffe1cc',
      'brown-150': '#f8ad79',
      'brown-950': '#462b13',
      'gray-50': '#f7f7f7',
      'gray-150': '#e8e8e8',
      'gray-250': '#f6f6f6',
      'gray-350':  '#1c1c1c', 
      yellow: '#ffb700',
      white: '#fff',
      black: '#000',
      lime: '#60d6b1',
      grayishBrown: '#f9eee6;',
    },
    fontFamily: {
      redhat: ['"Red Hat Display"'],
      milky: ['"Milk And Honey"'],
    },
    extend: {
      height: {
        446: '446px'
      },
      padding: {
        138: '138px',
        102: '102px',
        72: '72px',
        52: '52px',
        69: '69px',
      },
      margin: {
        18: '18px',
      },
      backgroundImage: {
        'brown-gradient': 'linear-gradient(to bottom, #422410 100%, #2D1A0F 64%)',
      },
      fontSize: {
        44: '44px',
        42: '42px',
        40: '40px',
        50: '50px',
        64: '64px',
        21: '21px',
        22: '22px'
      },
      lineHeight: {
        56: '56px',
      },
      borderRadius: {
        10: '10px',
        22: '22px'
      },
    },
  },
  plugins: [],
}
