/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        //add constant colors here
        //"ppas-primary" : "#0F386B",
      },
      
    },
  
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
