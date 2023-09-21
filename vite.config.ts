import generouted from '@generouted/react-router/plugin'
import UnheadVite from '@unhead/addons/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import forgetti from 'vite-plugin-forgetti'
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
    /**
     * required by `@matrix-org/olm`
     * {@link https://gitlab.matrix.org/matrix-org/olm/-/issues/10}
     */
    'window.OLM_OPTIONS': {},
  },
  envPrefix: ['MOMOI_', 'VITE_'],
  plugins: [
    forgetti({
      preset: 'react',
      filter: {
        include: 'src/**/*.{ts,js,tsx,jsx}',
        exclude: 'node_modules/**/*.{ts,js,tsx,jsx}',
      }
    }),
    million.vite({ auto: true }),
    react(),
    generouted(),
    UnheadVite(),
    vanillaExtractPlugin({ identifiers: mode === 'production' ? 'short' : 'debug' }),
    splitVendorChunkPlugin(),
    tsconfigPaths(),
  ],
}))
