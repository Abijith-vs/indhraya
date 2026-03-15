/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blue-theme': {
                    400: '#3B82F6',
                    500: '#1D4ED8',
                    600: '#1E40AF',
                },
                'green-theme': {
                    400: '#10B981',
                    500: '#059669',
                    600: '#047857',
                },
            },
        },
    },
    plugins: [],
}
