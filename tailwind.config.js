/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
      /* My Darker Color Pallet */
      primary: '#0b132bff',
      secondary: '#1c2541ff',
      tertiary: '#3a506bff',
      quaternary: '#5bc0beff',
      quinary: '#6fffe9ff',
      shadedprimary: '#060a17ff',
      shadedsecondary: '#0e1321ff',
      shadedtertiary: '#1b2633ff',
      textwhite: '#edf2f4ff',
      textdark:'#2b2d42ff',
      }
    },


  },
  daisyui:{
      themes:["light","dark","drakula"],

  },
  plugins: [
    require('daisyui')
  ],
}

