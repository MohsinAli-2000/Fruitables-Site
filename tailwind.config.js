/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#81C408',
        'custom-orange': '#FFB524',
        'custom-black' : '#45595B',
        'custom-white' : '#F4F6F8',
        'custom-heading' : '#45595B',
        'custom-red':'#DC3545',
      },
    },
  },
  plugins: [],
}

