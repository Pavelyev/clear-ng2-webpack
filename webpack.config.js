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
            { test: /\.ts/, loader: 'ts', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
        })],
    devtool: 'source-map'
};