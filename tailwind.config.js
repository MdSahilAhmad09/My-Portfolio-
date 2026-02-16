/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode based on class
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-glow-neon-green': {
          '0%, 100%': { boxShadow: '0 0 4px #39FF14, 0 0 8px #39FF14, 0 0 12px #39FF14' }, // Stronger glow
          '50%': { boxShadow: '0 0 2px #39FF14, 0 0 4px #39FF14' }, // Subtle glow
        },
        blink: {
          '0%, 100%': { color: '#39FF14' }, // Neon Green
          '50%': { color: '#000000' }, // Black
        }
      },
      animation: {
        'pulse-glow-neon-green': 'pulse-glow-neon-green 2s infinite alternate ease-in-out',
        blink: 'blink 1s infinite step-end',
      },
    },
  },
  plugins: [],
};
