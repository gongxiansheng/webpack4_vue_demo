const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const resolve = function(dir){
    return path.resolve(__dirname,'..',dir)
}
module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'boundle.js',
        path: resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: resolve('node_modules'),
                use: "babel-loader"
            },
            {
                test: /\.less$/,
                use: ["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: "url-loader?limit=8192"
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}
//https://juejin.im/post/5b9b4f046fb9a05d37618115