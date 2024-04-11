// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
const outputOption = {
  sourcemap: false, // 生成 source map
  globals: {
    qs: 'qs'
  }
}
export default {
  input: './src/index.ts', // 入口文件路径
  output: [
    {
      name: 'fl-utils',
      file: './lib/index.js', // 输出文件路径
      format: 'es', // 输出模块格式为 CommonJS
      ...outputOption
    },
    {
      name: 'fl-utils',
      file: './lib/index.umd.js', // 输出文件路径
      format: 'umd', // 输出模块格式为 CommonJS
      ...outputOption
    }
  ],
  plugins: [
    typescript(), // 使用 Rollup 插件处理 TypeScript
    terser()
  ],
  external: ['react', 'qs'], // 将 react 设置为外部依赖，不会打包到最终文件中
};
