/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: "640px",
      lg: "1025px",
      xlg: {
        max: "1024px",
      },
      xsm: {
        max: "639px",
      },
      tablet: {
        min: "640px",
        max: "1024px",
      },
    },
    fontFamily: {
      svnGilroy: ["SVN-Gilroy", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hover: "linear-gradient(92deg, #F7083A 1.26%, #6519FF 125.12%)",
        "linear-default": "linear-gradient(180deg, #F7083A 0%, #6519FF 100%)",
      },
      boxShadow: {
        sd: "0px 2px 24px 0px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        do: "#F7083A",
        xanh: "#6519FF",
        "greyscale-grey-900": "#272727",
        "greyscale-grey-600": "#545454",
        "greyscale-grey-500": "#5C5C5C",
      },
    },
  },
  plugins: [],
};
