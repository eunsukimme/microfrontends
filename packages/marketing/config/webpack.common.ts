import { Configuration } from 'webpack'

export const commonConfig: Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
