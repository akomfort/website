const colors = require('tailwindcss/colors')

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    'node_modules/preline/dist/*.js',
  ],

  theme: {
    extend: {
      colors: {
        "primary": colors.blue
      }
    },
  },

  plugins: [
    require('preline/plugin'),
  ],
};

module.exports = config;
