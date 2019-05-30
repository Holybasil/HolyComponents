module.exports = {
  devServer: {
    open: true
  },
  parallel: require("os").cpus().length > 1
};
