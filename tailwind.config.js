/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            screens: {
                'xl': '1180px',
                '2xl':'1456px',
            },
            fontFamily: {
                sans: ['Open Sans', 'sans-serif']
                },
            colors: {
                'branco':'#FFFFFF',
                'pink': '#C81C6F',
                'cinza-escuro':'#333333',
                'cinza':'#464646',
                'cinza-claro':'#555555',
                'gray':'#242424'
            }
        },
    },
    plugins: [],
}