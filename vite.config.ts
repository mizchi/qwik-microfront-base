import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import sveltePreprocess from "svelte-preprocess";
// import path from "path";
// import { svelte } from "vite-plugin-svelte";
import {qwikSvelte} from "./src/vite"

export default defineConfig((options) => {
  // console.log('[viteDefine]', options);
  return {
    plugins: [
      qwikSvelte({
        preprocess: sveltePreprocess(),
        css: "injected"
      }),
      // svelte({
      //   preprocess: [sveltePreprocess({typescript: true})],
      //   compilerOptions: {
      //     generate: options.mode === "ssr" ? "ssr" : "dom",
      //   }
      // }),
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
