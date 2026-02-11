import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // This is the new way for Tailwind v4
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static', // or 'server' if you're using Vercel functions
  adapter: vercel(),
});