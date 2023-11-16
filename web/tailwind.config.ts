import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-karbon)"],
                serif: ["var(--font-swift)"],
            },
        },
        colors: {
            blue: "#2E3092",
            darkBlue: "#281F6B",
            lightBlue: "#68B9E8",
            red: "#DA1F3D",
            yellow: "#FFD800",
            grey: "#F8F8F8",
            darkGrey: "#5C5C5C",
            green: "#00804D",
            white: "#FFFFFF",
            black: "#000000",
        },
    },
    plugins: [],
}
export default config
