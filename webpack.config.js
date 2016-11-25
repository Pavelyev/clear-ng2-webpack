var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/main',
        vendor: './app/vendor',
    },
    output: {
        path: 'dist',
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.(html|css)$/, loader: 'raw' },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
        }),
        new webpack.optimize.CommonsChunkPlugin("common.js")
    ],
    devtool: 'source-map'
};