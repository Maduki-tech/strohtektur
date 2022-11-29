/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                background: "url(/background.jpg)",
            },
            colors: {
                stroh: "#ECBF7A",
            },
            fontFamily: {
                sans: [
                    "NotoSans, sans-serif",
                    { fontFeatureSettings: '"cv11", "ss01"' },
                ],
				'recoleta': '"Recoleta", "regular"'
            },
        },
    },
    plugins: [],
};
