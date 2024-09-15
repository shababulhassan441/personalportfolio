/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fe4519',
        secondary: '#262626',
        textcolor: '#3b3b3b',
        lightcolor: '#f1f1f1',
      },
    },
  },
  plugins: [],
};
