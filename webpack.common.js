const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // define entry point
    entry: {
        main: './app/js/main.js',
        vendor: './app/js/vendor.js'
    },
    // define output point
    output: {
        path: require('path').resolve(__dirname,'./dist'),
        filename: '[name].[contenthash].bundle.js',
    },
    stats: {
        children: true,
    },
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
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[hash].[ext]'
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
                            name: 'svg/[hash].[ext]'
                        },
                    },
                ],
            },

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './app/index.html'
    })],
};
