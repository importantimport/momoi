import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import { defineConfig } from 'tsup'

export default defineConfig(({ watch }) => ({
  dts: true,
  entry: ['src/**/*.ts'],
  esbuildPlugins: [
    vanillaExtractPlugin({ identifiers: watch ? 'debug' : 'short' }) as any,
  ],
  format: ['esm'],
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : `.${format}`,
  }),
}))
