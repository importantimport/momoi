import { defineConfig } from 'vite'
import million from 'million/compiler'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    generouted(),
  ],
})
