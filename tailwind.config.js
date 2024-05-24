/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8FAFB",
        secondary: "#FFFFFF",
        tertiary: "#8870C9",
      },
    },
  },
  plugins: [],
};
