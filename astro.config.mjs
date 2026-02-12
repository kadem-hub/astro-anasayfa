// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  // WP hibritte URL tutarlılığı için öneri
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
