/** @type {import('tailwindcss').Config} */
module.exports = {
 // important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      sans: ['Roboto', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    colors:{
      'purpel':'#4458dc',
      'lightpurpel':'#854fee',
      'lightgray':'#788489',
      'white': '#ffffff',
      'transparent':'transparent',
      'black':'#000000',
      'bocolor':'#ededed33',
      'ptagcolor': '#777777',
      'bordercolor': '#eeeeee'
    },
    lineHeight:{
     'paralineheight':'1.5rem',
     'headinglineheight':'3.5rem'
    },
    extend: {
      backgroundImage: { 
        'newsLetterPattern': "url('asset/subscribe-bg.png')", 
        'bannerBackgroundTransparent': "url('asset/home-banner.png')", 
      }, 
    },
    
  },
  
  plugins: [],
  prefix: 'twl-',
  /*corePlugins: [
    'margin',
    'padding',
    'fontWeight'
  ]*/
}

