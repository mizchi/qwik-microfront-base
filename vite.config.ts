import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import sveltePreprocess from "svelte-preprocess";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import vue from "@vitejs/plugin-vue";

export default defineConfig((options) => {
  return {
    build: {
      rollupOptions: {
        external: [
          "fs",
        ]
      }
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess(),
        compilerOptions: {
          // @ts-ignore
          generate: options.mode === "ssr" ? "ssr" : "dom",
          hydratable: true,
        },
      }),
      vue({}),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      qwikReact()
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
