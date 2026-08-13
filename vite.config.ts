import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "./",

  plugins: [
    react(),

    tailwindcss(),

    legacy({
      targets: ["Chrome 38"],
      renderLegacyChunks: true,
      additionalLegacyPolyfills: [
        "regenerator-runtime/runtime",
      ],
    }),
  ],

  build: {
    outDir: "smarttvapp",
    emptyOutDir: false,
    // build.target é definido pelo próprio plugin-legacy a partir de `targets`.
    // Declará-lo aqui só emite "plugin-legacy overrode 'build.target'".
    cssTarget: "chrome38",
    minify: "terser",
    sourcemap: true,
  },
});
