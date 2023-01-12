import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'

import pkg from './package.json' assert { type: 'json' }

export default defineConfig([
  {
    input: 'src/main.ts',
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'cjs' },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(),
      terser()
    ],
  },
  {
    input: 'dist/types/main.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
])
