module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'Arial', 'sans-serif'],
      display: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#2563eb',
        accent: '#10b981',
        surface: '#f8fafc',
        card: '#fff',
        cardDark: '#23272f',
        highlight: '#fbbf24',
      },
      boxShadow: {
        card: '0 4px 16px 0 rgba(37,99,235,0.07)',
      },
    },
  },
  plugins: [],
}
