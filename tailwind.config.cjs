const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontSize: {
        h1: defaultTheme.fontSize['6xl'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  corePlugins: {
    // preflight: false,
  },
  // content: ['./node_modules/flowbite/**/*.js'],
};
