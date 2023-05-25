/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya", "serif"],
      },
      colors: {
        'newblue' : '#003CC0;',
        'grad-b2' : '#07CBFD;',
        'newpink' : '#F448AE;',
        'grad-p1' : '#F487C8;',
        'secondary' : '#2C2C2C',
      },
    },
  },
  plugins: [],
};
