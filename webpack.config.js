var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/app'
    },
    output: {
        path: 'dist',
        filename: '[name].bundle.js',
    },
    plugins: [new HtmlWebpackPlugin()],
    devtool: 'source-map'
};