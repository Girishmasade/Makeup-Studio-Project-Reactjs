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
         'fragrance': "url('/public/bg4.jpg')",
         'servicesBg': "url('/public/bg5.jpg')"
      },
    },
  },
  plugins: [],
}

