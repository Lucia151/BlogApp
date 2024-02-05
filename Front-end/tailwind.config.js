/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        buttonsBlue: '#1565D8',
        inputOutlineGray:'#959EAD',
        inputText:'#C3CAD9',
        cardsGray:'#E6E2E2',
        headingsBlue:'#183B56',
        
        
      }
    
    },
  },
  plugins: [],
}
