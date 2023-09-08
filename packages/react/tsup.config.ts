import glob from 'fast-glob'
import { defineConfig } from 'tsup'

export default defineConfig({
  dts: { resolve: true },
  entry: Object.fromEntries(glob
    // glob all tsx file (without stories)
    .sync('src/**/*.tsx', { ignore: ['src/**/*.stories.tsx'] })
    // 'src/components/button.tsx' => ['components/button', 'src/components/button.tsx']
    .map(entry => [entry.slice(4), entry]),
  ),
  format: ['esm'],
})
