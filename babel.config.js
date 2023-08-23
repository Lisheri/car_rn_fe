const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@pages': path.resolve(__dirname, './src/pages'),
          '@utils': path.resolve(__dirname, './src/utils'),
        },
      },
    ],
  ],
};
