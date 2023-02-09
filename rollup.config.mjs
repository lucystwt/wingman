import { createRequire } from "node:module"

import { babel } from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import typescript from "@rollup/plugin-typescript"
import { defineConfig } from "rollup"
import dts from "rollup-plugin-dts"

const _require = createRequire(import.meta.url)
const pkg = _require("./package.json")

export default defineConfig([
  {
    input: "src/main.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
      { file: "dist/index.js", format: "umd", name: "wingman" },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
        extensions: [".js", ".ts"],
        babelHelpers: "bundled",
      }),
      terser(),
    ],
  },
  {
    input: "dist/types/main.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
])
