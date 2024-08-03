/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      objectPosition: {
        'center-top': 'center top 90%', // Puoi regolare il valore percentuale come desideri
      },
    },
  },
  plugins: [],
}


