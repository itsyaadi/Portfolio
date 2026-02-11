import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://baaditya.com.np',
  integrations: [tailwind()],
});