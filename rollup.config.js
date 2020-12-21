import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/main.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      exports:'named'
    },
    external: [ 'faker' ],
    plugins: [
        nodeResolve(),
        commonjs({extensions:['.js','.ts']}),
        typescript(),
        terser()
      ]
  }