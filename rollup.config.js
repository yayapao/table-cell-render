import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

const inputPath = {
  ts: 'src/index.tsx',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: inputPath.ts,
  output: {
    file: 'npm/index.js',
    format: 'cjs',
    exports: 'auto',
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    postcss(),
  ],
  external: ['react', 'react-dom', 'antd'],
}
