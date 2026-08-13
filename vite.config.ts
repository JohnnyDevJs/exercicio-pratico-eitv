import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "./",

  plugins: [
    react(),

    legacy({
      targets: ["Chrome 38"],
      renderLegacyChunks: true,
      // Só o bundle legacy carrega estes. O core-js do plugin-legacy cobre
      // apenas ECMAScript, nunca APIs de DOM — e o Embla 8 constrói um
      // IntersectionObserver sem guard nenhum (SlidesInView.init), que não
      // existe no Chromium 38 (Chrome 51+). Sem o polyfill o carrossel morre
      // na inicialização. O ResizeObserver (Chrome 64+) é usado pelo
      // watchResize, que é `true` por padrão.
      additionalLegacyPolyfills: [
        "regenerator-runtime/runtime",
        "intersection-observer",
        "resize-observer-polyfill/dist/ResizeObserver.global.js",
      ],
    }),
  ],

  build: {
    emptyOutDir: false,
    cssTarget: "chrome38",
    minify: "terser",
    sourcemap: true,
  },
});
