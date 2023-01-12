/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/side-bar/side-bar.component.html',
  './src/app/error/error.component.html',
  './src/app/dashboard/dashboard.component.html',
  './src/app/app.component.html',], 
  theme: {
    extend: {
      colors:{
        'mainpurple':'#5570f1',
        'mainwhite': '#ffffff',
        'maingrey': '#8B8D97',
        'mainblack': '#53545C',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
 