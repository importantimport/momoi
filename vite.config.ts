import { defineConfig, splitVendorChunkPlugin } from 'vite'
import million from 'million/compiler'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      treeshake: 'recommended',
    },
  },
  plugins: [
    million.vite({ auto: true }),
    react(),
    generouted(),
    splitVendorChunkPlugin(),
  ],
})
