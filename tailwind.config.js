/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07080a',
          900: '#0a0c10',
          850: '#0e1116',
          800: '#12151b',
          700: '#1b1f27',
          600: '#282d38',
          500: '#3a404d',
        },
        bone: {
          100: '#f6f5f2',
          200: '#e9e7e1',
          300: '#c9c7c0',
          400: '#9b9a95',
        },
        accent: {
          DEFAULT: '#5ee0c4',
          soft: '#8ff0da',
          dim: '#2c6b5c',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(246,245,242,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,245,242,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
