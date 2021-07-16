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

//const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, 'js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            //{
            //    test: /\.css$/,
            //    use: ['style-loader', 'css-loader']
            //},
            {
                test: /\.(mp[3|4])$/i,
                use: [
                    'file-loader',
                ],
            },

            {
                test: /\\.(png|jpe?g|gif)$/i,
                use: [{
                        loader: 'img-optimize-loader',
                        options: {
                            compress: {
                                mode: 'high',
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false,
                            },
                        },
                    },

                ],
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new BundleAnalyzerPlugin,
        //new CopyPlugin({
        //    patterns: [{
        //        from: (__dirname, "media"),
        //        to: "media"
        //    }]
        //}),
    ]
}