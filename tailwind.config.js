/** @type {import('tailwindcss').Config} */
export default {
    content: [           
               "./src/**/*.{html,js,jsx}",
               "./index.html",
               "node_modules/flowbite-react/lib/esm/**/*.js",
              ],
    theme: {
      extend: {},
      colors: {
        light: '#F1DEC9',
        dark: '#8D7B68',
        alternative: '#e8ca8e'
      }
    },
    plugins: [require('flowbite/plugin'),],
  }
  