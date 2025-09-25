/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/assets/bg-desktop.png')",
        'hero-mobile': "url('/assets/bg-mobile.png')",
      },
      fontFamily: {
        mplus: ["MPLUSRounded1c", "sans-serif"],
        interTight: ['"Inter Tight"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
