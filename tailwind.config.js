module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cover: "#0076CB",
        primary: "#5c6ac4",
        secondary: "#ecc94b",
        lightblue: "#5B86BF",
      },
      minHeight: {
        96: "24rem",
        100: "30rem",
        "3/4": "75%",
      },
    },
  },
  variants: {
    extend: {
      margin: ['focus'],
      height: ['focus'],
      cursor: ['hover']
    },
  },
  plugins: [],
};
