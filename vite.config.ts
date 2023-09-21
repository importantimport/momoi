import generouted from '@generouted/react-router/plugin'
import UnheadVite from '@unhead/addons/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      treeshake: 'recommended',
    },
    target: 'esnext',
  },
  css: { transformer: 'lightningcss' },
  define: {
    /** required by `matrix-js-sdk` */
    global: 'window',
    /** required by `react-secure-storage` */
    'process.env': {},
  },
  envPrefix: ['MOMOI_', 'VITE_'],
  plugins: [
    million.vite({ auto: true }),
    react(),
    generouted(),
    UnheadVite(),
    vanillaExtractPlugin({ identifiers: mode === 'production' ? 'short' : 'debug' }),
    splitVendorChunkPlugin(),
    tsconfigPaths(),
  ],
}))
