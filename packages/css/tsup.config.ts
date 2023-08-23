import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import { defineConfig } from 'tsup'

export default defineConfig(({ watch }) => ({
  dts: !watch,
  entry: ['src/*.css.ts', 'src/**/*.css.ts'],
  esbuildPlugins: [
    vanillaExtractPlugin({ identifiers: watch ? 'debug' : 'short' }) as any,
  ],
  format: ['esm'],
}))
