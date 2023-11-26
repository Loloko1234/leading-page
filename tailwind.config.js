/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/5": "20%",
      },
      translate: {
        "1/5": "14%",
      },
      width: {
        106: "28rem",
      },
      colors: {
        "hsl-136": "hsl(136, 65%, 51%)",
        "hsl-233": "hsl(192, 70%, 51%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        DarkBlue: "hsl(233, 26%, 24%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        "custom-gradient-start-hover": "#ffcc00",
        "custom-gradient-end-hover": "#0099ff",
        LightGrayishBlue: "hsl(192, 70%, 51%)",
      },
      padding: {
        18: "4.5rem", // Dodanie wartości p-18 o wartości 4.5rem
      },
      height: {
        15: "3.85rem", // Dodanie wartości h-15 o wartości 3.75rem
      },
      backgroundImage: (theme) => ({
        "gradient-hsl": `linear-gradient(to right, ${theme(
          "colors.hsl-136"
        )}, ${theme("colors.hsl-233")})`,
      }),
    },
  },
  plugins: [],
};
