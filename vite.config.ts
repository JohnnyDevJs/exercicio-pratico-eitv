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
      additionalLegacyPolyfills: [
        "regenerator-runtime/runtime",
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
