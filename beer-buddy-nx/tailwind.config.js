const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './apps/beer-buddy/pages/*.{tsx,jsx,ts,js}',
      './apps/beer-buddy/pages/**/*.{tsx,jsx,ts,js}',
      './apps/beer-buddy/components/**/*.{tsx,jsx,ts,js}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
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
