/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        group: "url('../public/img/Group.png')",
      },
      backgroundImage2: {
        group: "url('../public/img/Group.png')",
      },
      boxShadow: {
        '5xl':
          '0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);',
      },
    },
  },
  plugins: [],
}
