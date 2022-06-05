import { nodeResolve } from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      name: "simple-ui",
    },
  ],
  plugins: [
    external(),
    nodeResolve({
      extensions: [".js"],
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss(),
    terser(),
  ],
};
