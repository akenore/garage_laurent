/** @type {import('tailwindcss').Config} */
export default {
     content: [
          './src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
     ],
     theme: {
          fontFamily: {
               // 'display': [
               //      'Oswald',
               // ],
               'body': ['"Open Sans"',]
          },
          extend: {
               colors: {
                    red: '#CC0117',
                    red2: '#b30015',
                    yallow: '#FEEE12',
                    vGray: {
                         "20": '#F3F3F3',
                         "30": '#E8E8E8',
                         "50": '#9A9A9A',
                         "100": '#707070',
                         "200": '#232324',
                         "300": '#0C0C0C',
                         "400": '#1C1C1C',
                    }
               },
               fontFamily: {
                    'segoe': ['Segoe UI', 'sans-serif']
               },
               backgroundImage: {
                    'hero-web': "url('/src/assets/img/hero.webp')",
                    'hero-mobile': "url('/src/assets/img/hero-mobile.webp')",
                    'footer' : "url('/src/assets/img/footer-bg.webp')"
               }
          }
     },
     // eslint-disable-next-line no-undef
     plugins: [require('flowbite/plugin'),]
}
