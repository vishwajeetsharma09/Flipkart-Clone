// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/, // Apply this rule to .png, .jpg, .gif, .svg files
        include: path.resolve(__dirname, "src/imgs"), // Only process files in src/imgs folder
        use: [
          {
            loader: "file-loader", // Use file-loader for handling image files
            options: {
              name: "[name].[ext]", // Name of the output file
              outputPath: "images/", // Output directory for images in 'dist'
            },
          },
        ],
      },
    ],
  },
};
