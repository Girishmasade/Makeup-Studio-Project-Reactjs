/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        'custom-pattern': "url('/public/bg.jpg')", 
         'about-us': "url('/public/Aboutus.jpg')",
         'fragrance': "URL('/public/bg4.jpg')"
      },
      // backgroundImage: { 'about-us': "url('/public/Aboutus.jpg')", },
    },
  },
  plugins: [],
}

