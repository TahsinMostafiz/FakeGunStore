/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#80e5c8",
        
"secondary": "#addded",
        
"accent": "#84f994",
        
"neutral": "#242438",
        
"base-100": "#FCFCFC",
        
"info": "#8FD1E5",
        
"success": "#7BEAC3",
        
"warning": "#FBBA65",
        
"error": "#E45E76",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
