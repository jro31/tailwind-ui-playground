const defaultTheme = require('tailwindcss/defaultTheme');

const navbarHeight = '4rem';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        'screen-minus-nav': `calc(100vh - ${navbarHeight})`,
      },
      spacing: {
        'screen-minus-nav': `calc(100vh - ${navbarHeight})`,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
