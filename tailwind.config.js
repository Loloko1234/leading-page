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
