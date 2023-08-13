import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

export default defineConfig(() => {
  return {
    build: {
      minify: false,
      target: 'es2020',
      lib: {
        entry: ['./src/index.qwik.ts', './src/vite.ts'],
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      rollupOptions: {
        external: [
          'svelte',
          'svelte/internal',
          'svelte/store',
          'svelte/env',
          'svelte/animate',
          'svelte/easing',
          'svelte/motion',
          'svelte/transition',
          "@qwik-city-plan",
          '@qwik-city-sw-register'
        ],
      },
    },
    plugins: [qwikVite()],
  };
});