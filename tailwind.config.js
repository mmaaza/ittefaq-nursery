/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Green palette for plants and foliage
                leaf: {
                    light: '#9CC084',
                    DEFAULT: '#5A8642',
                    dark: '#3D5E2F',
                },
                moss: {
                    light: '#D2E3C8',
                    DEFAULT: '#B5C99A',
                    dark: '#8BA070',
                },
                // Earth tones for soil and natural elements
                soil: {
                    light: '#AE8B70',
                    DEFAULT: '#7D5F45',
                    dark: '#5D4631',
                },
                // Terracotta for pots
                terracotta: {
                    light: '#E9A178',
                    DEFAULT: '#D17F55',
                    dark: '#A85C3A',
                },
                // Neutral tones for backgrounds
                cream: {
                    light: '#FFFDF5',
                    DEFAULT: '#F9F4E8',
                    dark: '#EFE9D9',
                },
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                sans: ['"Open Sans"', 'Helvetica', 'Arial', 'sans-serif'],
            },
            borderRadius: {
                'natural': '0.85rem',
                'leaf': '2rem 0.5rem 2rem 0.5rem',
            },
            boxShadow: {
                'soft': '0 4px 12px rgba(90, 134, 66, 0.1)',
                'hover': '0 6px 16px rgba(90, 134, 66, 0.2)',
            },
            backgroundImage: {
                'leaf-pattern': "url('/patterns/leaf-bg.png')",
                'dotted': "radial-gradient(#5A8642 0.5px, transparent 0.5px)",
            },
            backgroundSize: {
                'dotted-sm': '10px 10px',
            },
        },
    },
    plugins: [],
};

