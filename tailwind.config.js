/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        group: "url('../public/img/Group.png')",
      },
    },
  },
  plugins: [],
}
