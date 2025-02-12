import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sucrase from '@rollup/plugin-sucrase';

export default {
  input: ['src/index.ts'],
  output: {
    dir: 'build',
    sourcemap: true,
    preserveModules: false,
    strict: false,
    freeze: false,
    interop: 'auto',
    format: 'esm',
    banner: '/// <reference types="./index.d.ts" />',
  },
  plugins: [
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx'],
    }),
    commonjs(),
    sucrase({ transforms: ['typescript'] }),
  ],
};
