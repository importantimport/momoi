import { defineConfig, splitVendorChunkPlugin } from 'vite'
import million from 'million/compiler'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

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
  envPrefix: ['MOMOI_', 'VITE_'],
  plugins: [
    million.vite({ auto: true }),
    react(),
    generouted(),
    vanillaExtractPlugin({ identifiers: mode === 'production' ? 'short' : 'debug' }),
    splitVendorChunkPlugin(),
  ],
}))
