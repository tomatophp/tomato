/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./vendor/tomatophp/**/resources/views/**/*.blade.php",
        "./vendor/tomatophp/**/resources/js/**/*.vue",
        "./Modules/**/resources/views/**/*.blade.php",
        "./Modules/**/resources/assets/js/**/*.vue",
    ],

    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily: {
            main: ["IBM Plex Sans Arabic"],
        },
        asideScrollbars: {
            light: "light",
            gray: "gray",
        },
        extend: {
            colors: {
                danger: colors.rose,
                primary: colors.blue,
                success: colors.green,
                warning: colors.amber,
                black: colors.black,
            },
            zIndex: {
                "-1": "-1",
            },
            flexGrow: {
                5: "5",
            },
            maxHeight: {
                "screen-menu": "calc(100vh - 3.5rem)",
                modal: "calc(100vh - 160px)",
            },
            transitionProperty: {
                position: "right, left, top, bottom, margin, padding",
                textColor: "color",
            },
            keyframes: {
                "fade-out": {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
                "fade-in": {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
            animation: {
                "fade-out": "fade-out 250ms ease-in-out",
                "fade-in": "fade-in 250ms ease-in-out",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "aside-scrollbars": (value) => {
                        const track = value === "light" ? "100" : "900";
                        const thumb = value === "light" ? "300" : "600";
                        const color = value === "light" ? "gray" : value;

                        return {
                            scrollbarWidth: "thin",
                            scrollbarColor: `${theme(
                                `colors.${color}.${thumb}`
                            )} ${theme(`colors.${color}.${track}`)}`,
                            "&::-webkit-scrollbar": {
                                width: "8px",
                                height: "8px",
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: theme(
                                    `colors.${color}.${track}`
                                ),
                            },
                            "&::-webkit-scrollbar-thumb": {
                                borderRadius: "0.25rem",
                                backgroundColor: theme(
                                    `colors.${color}.${thumb}`
                                ),
                            },
                        };
                    },
                },
                { values: theme("asideScrollbars") }
            );
        }),
        require("@tailwindcss/line-clamp"),
        require("tailwindcss-rtl"),
    ],
};
