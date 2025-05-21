module.exports = {
    plugins: [
      require('postcss-preset-env')({
        stage: 0,
        features: {
          'nesting-rules': true
        }
      }),
      // Add other plugins here if needed
    ]
  }