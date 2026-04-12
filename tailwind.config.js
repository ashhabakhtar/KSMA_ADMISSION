/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0369A1',     // Changing navy to a deep sky blue for primary text
          blue: '#0284C7',     // Bright blue
          light: '#F0F9FF',    // Very light blue for global backgrounds
          accent: '#38BDF8',   // Vibrant light blue
          gold: '#0284C7',     // Replaced gold with blue to keep the theme strictly blue
          frame: '#BAE6FD'     // Distinct light blue for component frames/borders
        },
        slate: {
          900: '#0C4A6E',      // Darkest sky blue
          800: '#075985',
          600: '#0284C7',
          500: '#0EA5E9',
          100: '#E0F2FE',      // Light sky blue
          50: '#F0F9FF',       // Lightest sky blue
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(56, 189, 248, 0.1)',
        'premium': '0 10px 40px -10px rgba(2, 132, 199, 0.15)',
        'frame': '0 0 0 4px rgba(186, 230, 253, 0.5)', // New frame shadow style
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
