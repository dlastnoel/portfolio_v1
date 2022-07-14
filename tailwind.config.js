module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('../assets/img/background.jpg')",
      }
    },
  },
  plugins: [],
}