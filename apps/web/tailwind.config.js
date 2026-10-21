/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1020',
        panel: '#121A2B',
        primary: '#6D7CFF',
        secondary: '#8A5CF6',
        cyan: '#4FD1FF',
        success: '#43D39E',
        warning: '#F7B267',
        danger: '#FF6B7A',
        text: '#EAF0FF'
      }
    }
  },
  plugins: []
};
