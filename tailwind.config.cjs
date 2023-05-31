const colors = require('tailwindcss/colors')

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        "primary": colors.blue
      }
    },
  },

  plugins: [
    require('tailwindcss-animated'),
  ],
};

module.exports = config;
