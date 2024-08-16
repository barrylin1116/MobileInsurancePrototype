/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      pc: '991.98px'
    },
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
