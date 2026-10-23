/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ivory:'#F8F4ED', champagne:'#C6A56B', espresso:'#211711', obsidian:'#101010', sand:'#E6D8C5', antique:'#A8874F', taupe:'#786A5B' },
    fontFamily: { serif:['Playfair Display','Georgia','serif'], sans:['DM Sans','Arial','sans-serif'] },
    boxShadow: { soft:'0 12px 36px rgba(33,23,17,.08)' }
  }},
  plugins: []
}
