const path = require("path");

module.exports = {
  entry: {
    tictactoe: "./lib/js/src/tictactoe.js"
  },
  output: {
    path: path.join(__dirname, "bundledOutputs"),
    filename: "[name].js"
  },
  stats: {
    assets: false,
    hash: false,
    chunks: false,
    errors: true,
    errorDetails: true,
     maxModules: 0,
  },
    devServer: {
    host: "localhost",
    port: 3000,
    stats: {
      assets: false,
      hash: false,
      chunks: false,
      errors: true,
      errorDetails: true,
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    overlay: true
  }

};
