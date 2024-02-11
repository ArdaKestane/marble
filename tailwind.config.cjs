module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: [
    './src/views/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        repeat: "url('/public/repeat.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
