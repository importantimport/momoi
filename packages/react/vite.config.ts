import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

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
  plugins: [
    vanillaExtractPlugin({ identifiers: mode === 'production' ? 'short' : 'debug' }),
    splitVendorChunkPlugin(),
  ],
}))
