/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'terminal-typing': 'typing 2s steps(40, end), blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        }
      },
      boxShadow: {
        'terminal': '0 0 20px rgba(34, 197, 94, 0.3)',
        'terminal-lg': '0 0 30px rgba(34, 197, 94, 0.4)',
      }
    },
  },
  plugins: [],
}

