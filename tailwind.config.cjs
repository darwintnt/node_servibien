/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ejs}'],
  theme: {
    extend: {
      colors: {
        'sv-green-01': '#4FC602',
        'sv-green-02': '#3FAB00',
        'sv-green-03': '#494626',
        'sv-green-04': '#24351A',
        'sv-gray-01': '#666666',
        'sv-gray-02': '#95B0B7',
        'sv-white-01': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
