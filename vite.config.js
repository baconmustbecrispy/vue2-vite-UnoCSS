import { defineConfig, loadEnv } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import requireContext from "rollup-plugin-require-context";
import Unocss from "@unocss/vite";
import { presetIcons, presetUno, transformerDirectives } from "unocss";
const path = require("path");

export default defineConfig(({ command, mode }) => {
  let config = {};
  const env = loadEnv(mode, process.cwd());
  if (command === "serve") {
    config = {
      base: "/",
    };
  } else {
    config = {
      base: env.VITE_APP_BASE,
      build: {
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
        outDir: env.VITE_APP_DIR,
        assetsDir: env.VITE_APP_ASSETS,
        rollupOptions: {
          output: {
            entryFileNames: `${env.VITE_APP_ASSETS}/js/entry[hash].js`,
            chunkFileNames: `${env.VITE_APP_ASSETS}/js/chunk[hash].js`,
            assetFileNames: `${env.VITE_APP_ASSETS}/assets/[hash][extname]`,
          },
        },
        brotliSize: false,
      },
    };
  }
  return {
    ...config,
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import "./src/assets/css/_config.scss";
    //     @import "./src/assets/css/bem.scss";
    //     @import "./src/assets/css/mixins.scss";
    //     @import "./src/assets/css/vars.scss";`,
    //     },
    //   },
    // },
    resolve: {
      extensions: [".js", ".vue", ".json", ".scss"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      createVuePlugin(),
      requireContext(),
      Unocss({
        presets: [presetUno(), presetIcons({})],
        transformers: [transformerDirectives()],
      }),
    ],

    server: {
      port: 8080,
      strictPort: true,
      proxy: {
        "/api": {
          target: "http://127.0.0.1:8080",
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
  };
});
