const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js", // Entry point of your framework
  output: {
    filename: "srk.bundle.js", // Output filename
    path: path.resolve(__dirname, "srk-output"), // Output directory
    libraryTarget: "umd", // Output library target
    library: "Srk", // Library name
    umdNamedDefine: true,
  },
};
