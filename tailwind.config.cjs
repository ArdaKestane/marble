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
      colors: {
        color3: '#E5E7EB',
        color4: '#D1D5DB',
        color5: '#1F2937',
        color6: '#F3F4F6',
        color7: '#FFFFFF',
        color8: '#A8A29E',
        color9: '#000000',

        mainDark: '#2C2C2C', // Deep charcoal
        secondaryDark: '#4F4F4F', // Medium charcoal
        mainLight: '#F5F5F5', // Light gray, soft and bright
        secondaryLight: '#E0E0E0', // Slightly darker gray for contrast
        thirdLight: '#FAFAFA', // Very light gray, almost white
        fourthLight: '#E5E1DA', // Light beige
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
