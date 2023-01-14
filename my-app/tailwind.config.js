/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/side-bar/side-bar.component.html',
  './src/app/error/error.component.html',
  './src/app/dashboard/dashboard.component.html',
  './src/app/app.component.html',
  './src/app/customers/customers.component.html', 
  './src/app/inventory/inventory.component.html', 
  './src/app/auth/login/login.component.html', 
  './src/app/auth/sign-up/sign-up.component.html', 
  './src/app/settings/settings.component.html',], 
  theme: {
    extend: {
      colors:{
        'mainpurple':'#5570f1',
        'mainyellow':'#FFCC91',
        'mainwhite': '#ffffff',
        'mainbg': '#EEF0FA',
        'maingrey': '#8B8D97',
        'mainblack': '#53545C',
      },
      spacing: {
        '20/21': '95.238095%',
        '1/21': '4.761904%',
        '30/100': '30%', 
        '32/100': '32%', 
        '66/100': '66%', 
      },
      fontFamily: {
        'mainFont': ['Poppins', 'sans-serif'],
        'secondaryFont': ['Inter', 'sans-serif'],
      }, 
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
 