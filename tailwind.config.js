/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-bg)'
        },
        surface: {
          card: 'var(--brand-surface-card)',
          bar: 'var(--brand-surface-bar)'
        }
      }
    },
  },
  plugins: [],
}
