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
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                dependency: { not: ['url'] },
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][contenthash].[ext]',
                            outputPath: 'images'
                        }
                    },
                ],
                type: 'javascript/auto'
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './app/index.html'
    })],
};
