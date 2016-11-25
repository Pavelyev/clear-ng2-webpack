var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./app'],
    devtool: 'source-map',
    output: {
        path: 'dist',
        filename: './bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()]
};