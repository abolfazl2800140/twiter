/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // این خط مسیر فایل‌های TypeScript و JSX را مشخص می‌کند
  ],
  theme: {
    extend: {
      fontFamily: {
        iranyekan: ["IRANYekan", "sans-serif"],
      },
      backgroundColor: {
        main: "rgba(255, 255, 255, 0.80)",
      },
    },
  },
  plugins: [],
};
