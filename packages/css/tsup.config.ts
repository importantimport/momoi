import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import glob from 'fast-glob'
import { defineConfig } from 'tsup'

export default defineConfig(({ watch }) => ({
  dts: true,
  entry: Object.fromEntries(
    glob
      .sync(['src/**/*.css.ts'])
      .map(entry => [entry.slice(4, -7), entry]),
  ),
  esbuildPlugins: [
    vanillaExtractPlugin({ identifiers: watch ? 'debug' : 'short' }) as any,
  ],
  format: ['esm'],
}))
