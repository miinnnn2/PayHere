const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/api/'),
      '@base': path.resolve(__dirname, './src/base/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@helper': path.resolve(__dirname, './src/helper/'),
      '@hooks': path.resolve(__dirname, './src/hooks/')
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].[fullhash].bundle.js',
    chunkFilename: 'js/[name].[fullhash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    hot: true,
    open: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    liveReload: true,
    proxy: {
      '/api/*': {
        target: 'https://api.github.com',
        pathRewrite: { '^/api': '' },
        secure: true,
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  }
};
