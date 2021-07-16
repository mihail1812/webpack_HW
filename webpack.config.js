const {
    resolve
} = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
    Template
} = require('webpack');
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            

            {
                test: /\\.(png|jpe?g|gif|mp3)$/i,
                use: 'file-loader'

            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new BundleAnalyzerPlugin,
        new CopyPlugin({
            patterns: [{
                from: (__dirname, "media"),
                to: "media"
            }]
        }),
    ]
}