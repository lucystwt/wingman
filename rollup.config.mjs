import { createRequire } from "node:module";

import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";

const _require = createRequire(import.meta.url);
const pkg = _require("./package.json");

export default defineConfig([
  {
    input: "src/main.ts",
    output: [
      { file: pkg.module, format: "es" },
      { file: pkg.main, format: "cjs" },
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
      typescript(),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env"],
        extensions: [".js", ".ts"],
      }),
      terser(),
    ],
  },
  {
    input: "dist/types/main.d.ts",
    output: [{ file: pkg.types, format: "es" }],
    plugins: [dts()],
  },
]);
