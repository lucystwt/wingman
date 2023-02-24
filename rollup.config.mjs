import { createRequire } from "node:module";

import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const _require = createRequire(import.meta.url);
const pkg = _require("./package.json");
const entry = "src/main.ts";

export default defineConfig([
  {
    input: entry,
    output: [
      { file: pkg.module, format: "es", sourcemap: true },
      { file: pkg.main, format: "cjs", sourcemap: true },
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
      esbuild(),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env"],
        extensions: [".js", ".ts"],
      }),
    ],
  },
  {
    input: entry,
    output: [{ file: pkg.types, format: "es" }],
    plugins: [dts()],
  },
]);
