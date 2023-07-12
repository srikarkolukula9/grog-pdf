/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#fcf8f8",
        dimgray: "#545454",
        lavenderblush: "#fff1f1",
        mistyrose: "#f5d4d4",
        maroon: "#510b0b",
        white: "#fff",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        rubik: "Rubik",
      },
      borderRadius: {
        "5xl-8": "24.8px",
      },
    },
    fontSize: {
      sm: "14px",
      "smi-8": "12.8px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
