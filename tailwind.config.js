/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#FF0063",

                    secondary: "#000000",

                    accent: "#F91944",

                    neutral: "#1C1721",

                    "base-100": "#EFF1F5",

                    info: "#5C7CDB",

                    success: "#128760",

                    warning: "#CE9912",

                    error: "#FB656A",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
