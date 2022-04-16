import { Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {merge} from 'webpack-merge'
import { commonConfig } from "./webpack.common";

const devConfig: Configuration = {
  mode: 'development',
  // @ts-ignore
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })   
  ]
}

export default merge(commonConfig, devConfig)