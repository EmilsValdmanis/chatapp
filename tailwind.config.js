/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        '50': '#f9fafb',
        '100': '#f4f5f7',
        '200': '#e5e7eb',
        '300': '#d2d6dc',
        '400': '#9fa6b2',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
      },
      purple: {
        '50': '#FAF5FF',
        '100': '#F2E8FF',
        '200': '#E7D5FF',
        '300': '#D5B4FE',
        '400': '#BB84FC',
        '500': '#9A47F7',
        '600': '#8B32EB',
        '700': '#7721CF',
        '800': '#6521A8',
        '900': '#541C87',
        '950': '#370764',
      },
    },
    extend: {},
  },
  plugins: [],
}

