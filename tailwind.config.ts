import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      display: ['Castoro', ...fontFamily.sans],
      body: ['Lato', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
      },
    },
  },
  plugins: [],
} satisfies Config;
