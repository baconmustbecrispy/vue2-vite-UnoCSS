import { splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import Unocss from '@unocss/vite';
import { presetIcons, presetUno, transformerDirectives } from 'unocss';
const path = require('path');

export default () => {
  return {
    server: {
      // host: true,
      // port: 8080,
    },
    plugins: [
      vue(),
      splitVendorChunkPlugin(),
      legacy({
        targets: ['defaults', 'not ie < 9'],
      }),
      Unocss({
        presets: [presetUno(), presetIcons({})],
        transformers: [transformerDirectives()],
      }),
    ],
    build: {
      // target: 'es2015',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            'element-ui': ['element-ui'],
          },
        },
      },
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', '.scss'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
};
