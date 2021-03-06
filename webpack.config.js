module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: babel-loader,
          options: {
            presets: [
              [ 'es2015', { modules: false }]
            ]
          }
        }
      }
    ]
  }
}