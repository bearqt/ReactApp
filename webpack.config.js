const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src'); 
const isProd = process.env.NODE_ENV === 'production';

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(srcPath, 'index.html')
  }),
  !isProd && new ReactRefreshWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name]-[hash].css'
  }),
  new ForkTsCheckerPlugin()
].filter(Boolean);

const  getCssRules = (withModules) => {
  return [
    "style-loader",
    withModules ? {
      loader: "css-loader",
      options: {
        modules:{
          localIdentName: !isProd ? '[path][name]__[local]' : '[hash:base64]'
        },
        publicPath: './'
      }
    } : 'css-loader',
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            'autoprefixer'
          ],
          publicPath: ''
        },
        
      },
    }
    ,
    'sass-loader'
  ]
}

module.exports = {
  entry: path.join(srcPath, 'index.tsx'),
  devtool: 'eval-source-map',
  output: {
    path:  path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  target: isProd ? 'browserslist' : 'web',
  module: {
    rules: [
      {
        test: /\.([tj])sx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.modules\.s?css$/,
        use: getCssRules(true)
      },
      {
        test: /\.s?css$/,
        exclude: /\.modules\.s?css$/,
        use: getCssRules(false)
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024 // 10kb
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias: {
      components: path.resolve(srcPath, 'Components')
    }
  },
  plugins,
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true
  }
}
