module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        // => @media (min-width: 480px) { ... }
      },
    },
  },
  plugins: [],
};
// "build": "tailwindcss -i .src/tailwind/css -o .css/tailwind.css -w"

//     "scripts": {
//   "start": "npm run watch:css && react-scripts start",
//   "build": "npm run watch:css && react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject",
//   "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
// }

// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"

// },
