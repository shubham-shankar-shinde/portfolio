/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#2563eb", // blue-600
        secondary: "#10b981", // emerald-500
        accent: "#f43f5e", // rose-500
        dark: "#1f2937", // gray-800
      },
    },
  },
  plugins: [],
};
