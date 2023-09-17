import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import glob from 'fast-glob'
import { defineConfig } from 'tsup'

export default defineConfig(({ watch }) => ({
  dts: { resolve: true },
  entry: Object.fromEntries(glob
    // glob all vanilla-extract file
    .sync(['src/**/*.css.ts'])
    // 'src/vars.css.ts' => ['vars', 'src/vars.css.ts']
    .map(entry => [entry.slice(4, -7), entry]),
  ),
  esbuildPlugins: [
    vanillaExtractPlugin({ identifiers: watch ? 'debug' : 'short' }) as any,
  ],
  format: ['esm'],
  minify: !watch,
}))
