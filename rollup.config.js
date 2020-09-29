import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const inputPath = {
  js: 'src/index.js',
  ts: 'src/typescript/index.tsx'
}

export default {
  input: inputPath.ts,
  output: {
    file: 'index.js',
    format: 'cjs',
    exports: "auto"
  },
  plugins: [typescript(), resolve(), commonjs()],
  external: ["react", "react-dom"]
}