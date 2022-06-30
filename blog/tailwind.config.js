/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/**/*.{html, js}', '*.html'], 
  theme: {
    extend: {
      maxWidth: {
        'sidebar': '10px',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'title': ['Rubik'],
        'body': ['Cabin'],
        'code': ['Source Code Pro'],
      }
    },
  },
  plugins: [require("daisyui")],
}
