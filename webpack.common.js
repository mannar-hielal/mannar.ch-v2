const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // define entry point
    entry: {
        main: './app/js/main.js'
    },
    // define output point
    output: {
        path: require('path').resolve(__dirname,'./dist'),
        filename: 'bundle.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './app/index.html'
    })],
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-env']
                }
            },
            {
                // test: /\.css$/i,
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[hash].[ext][query]'
                        },
                    },
                ],
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            encoding: false,
                            name: 'images/[hash].[ext][query]'
                        },
                    },
                ],
            },
        ]
    },
};
