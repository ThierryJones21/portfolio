module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        dark:"#1b1b1b",
        light:"#f5f5f5",
        primary:"#B63E96",
        primaryDark:"#58E6D9",
      },

      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#ecf0f3 6px,#ecf0f3 125px);',
      }

    },
  },
  plugins: [],
};
