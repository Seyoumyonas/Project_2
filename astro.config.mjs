import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static', // Use static output instead of server
  integrations: [
    tailwind(), // Include TailwindCSS
  ],
});
