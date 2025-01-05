import primeui from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      options: {
        cssLayer: {
          name: 'primevue', //any name you want. will be referenced on app.css
          order: 'tailwind-base, primeui, tailwind-utilities',
        },
      },
    },
  },
  plugins: [primeui],
}
