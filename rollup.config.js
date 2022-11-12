const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const peerDeps = require('rollup-plugin-peer-deps-external')
const postcss = require('rollup-plugin-postcss')
const { terser } = require('rollup-plugin-terser')
const typescript = require('rollup-plugin-typescript2')
const image = require('@rollup/plugin-image')

const packageJson = require('./package.json')

const peerDependencies = Object.keys(packageJson.peerDependencies || {})
const dependencies = Object.keys(packageJson.dependencies || {})

const external = [...peerDependencies, ...dependencies]

module.exports = [
  {
    input: 'src/main.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    external,
    plugins: [
      image(),
      nodeResolve({ browser: true, preferBuiltins: false }),
      typescript({ tsconfig: './tsconfig.json' }),
      peerDeps({ includeDependencies: true }),
      commonjs(),
      terser(),
      postcss({ extensions: ['.css', '.scss'] })
    ]
  }
]
