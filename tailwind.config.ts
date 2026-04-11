import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:   '#012d62',
        orange: '#f79256',
        baltic: '#0558a2',
        ocean:  '#1168ad',
        light:  '#f4f6fa',
      },
      fontFamily: {
        sans:  ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['var(--font-noto-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
