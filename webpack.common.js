const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');
var webpack = require('webpack');

function generateHtmlPlugins (templateDir) {
    // Read files in template directory
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
    // Split names and extension
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        // Create new HTMLWebpackPlugin with options
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
        });
    });
}

// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('./app/views');

module.exports = {
    // define entry point
    entry: {
        main: './app/js/main.js',
        vendor: './app/js/vendor.js'
    },
    // define output point
    output: {
        path: path.resolve(__dirname,'./dist'),
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
    plugins: [new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'})].concat(htmlPlugins)
};
