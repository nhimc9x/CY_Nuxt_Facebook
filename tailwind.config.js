/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            screens: {
                xs: '475px',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
            colors: {
                background: 'var(--background)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                tertiary: 'var(--tertiary)',
                text: 'var(--text-color)',
                highlight: 'var(--highlight)',
            }
        },
    },
    plugins: [],
}
