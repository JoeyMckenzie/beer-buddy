const defaultTheme = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './apps/beer-buddy/pages/*.{tsx,jsx,ts,js}',
      './apps/beer-buddy/pages/**/*.{tsx,jsx,ts,js}',
      './apps/beer-buddy/components/**/*.{tsx,jsx,ts,js}',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'warm-gray': defaultColors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/forms',
    '@tailwindcss/typography',
  ],
};
