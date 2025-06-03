/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      svnGilroy: ["SVN-Gilroy", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-number":
          "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 11.7%, #D9D9D9 40.82%, #D9D9D9 64.07%, rgba(217, 217, 217, 0.00) 93.43%)",
      },
      boxShadow: {
        nav: "2px 10px 20px 0px rgba(0, 42, 180, 0.15)",
      },
      colors: {
        secondary: "#81FF00",
      },
    },
  },
  plugins: [],
};
