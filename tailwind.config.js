/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brightBlue: "hsl(220, 98%, 61%)",
                veryLightGray: "hsl(0, 0%, 98%)",
                veryLightGrayishBlue: "hsl(236, 33%, 92%)",
                lightGrayishBlue: "hsl(236, 9%,61%)",
                darkGrayishBlue: "hsl(236, 9%, 61%)",
                veryDarkGrayishBlue: "hsl(235, 19%, 35%) ",

                "dark-veryDarkBlue": "hsl(235, 21%, 11%)",
                "dark-veryDarkDesaturatedBlue": " hsl(235, 24%, 19%)",
                "dark-lightGrayishBlue": "hsl(234, 39%, 85%)",
                "dark-lightGrayishBlue-hover": "hsl(236, 33%, 92%)",
                "dark-darkGrayishBlue": "hsl(234, 11%, 52%)",
                "dark-veryDarkGrayishBlue": "hsl(233, 14%, 35%)",

                "check-startColor": "hsl(192, 100%, 67%)",
                "check-endColor": "hsl(280, 87%, 65%)",
            },
            fontFamily: {
                body: ["'Josefin Sans'", "sans-serif"],
            },
        },
    },
    plugins: [],
};
