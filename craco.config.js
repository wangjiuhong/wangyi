//配置路径别名
const path = require("path");
const craoLess = require("craco-less");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
  plugins: [{ plugin: craoLess }],
};
