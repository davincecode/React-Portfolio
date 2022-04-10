module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        miller: "miller, cursive",
        millerLight: "miller-light, cursive",
        millerItalic: "miller-italic, cursive",
        millerItalicLight: "miller-italic-light, cursive",
        Grotesk: "Grotesk-Regular, san-serif",
        GroteskLight: "Grotesk-light, san-serif",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
