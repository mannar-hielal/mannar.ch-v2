const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

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
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}),
        new HtmlWebpackPartialsPlugin([
            {
                path: path.join(__dirname, './app/partials/header.html'),
                priority: 'high',
                location: 'body',
                template_filename: ['01blog-vochabular.html', '404.html','about.html','blog.html','portfolio.html','toplikes.html']
            }
        ]),
        new HtmlWebpackPartialsPlugin([
            {
                path: path.join(__dirname, './app/partials/footer.html'),
                location: 'footer',
                template_filename: ['01blog-vochabular.html', '404.html','about.html','blog.html','portfolio.html','toplikes.html']
            }
        ]),
        new HtmlWebpackPartialsPlugin([
            {
                path: path.join(__dirname, './app/partials/analytics.html'),
                location: 'analytics',
                template_filename: ['index.html','01blog-vochabular.html', '404.html','about.html','blog.html','portfolio.html','toplikes.html']
            }
        ])].concat(htmlPlugins)
};
