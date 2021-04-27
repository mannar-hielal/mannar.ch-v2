// this runs with npm start build
// it throws out a dist dic with minified js and hashed js file name
const commonConfig = require('./webpack.common');
const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.[contenthash].js',
        assetModuleFilename: 'images/[name][hash][ext]',
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        }),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: 'blog.html',
            dest: 'blog.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        }),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: 'about.html',
            dest: 'about.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        }),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: '01blog-vochabular.html',
            dest: '01blog-vochabular.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        }),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: 'portfolio.html',
            dest: 'portfolio.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        }),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: 'toplikes.html',
            dest: 'toplikes.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,  // use this loader instead of style-loader, bcoz we don't want css to in inside js, rather extracted
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: ImageMinimizerPlugin.loader, // compresses images
                        options: {
                            severityError: 'warning', // Ignore errors on corrupted images
                            minimizerOptions: {
                                plugins: [
                                    ['gifsicle', { interlaced: true }],
                                    ['mozjpeg', { progressive: true , quality: 60}],
                                    [
                                        'pngquant',
                                        {
                                            quality: [0.6, 0.8],
                                        },
                                    ],
                                    [
                                        'svgo',
                                        {
                                            plugins: [
                                                {
                                                    removeViewBox: false,
                                                },
                                            ],
                                        },
                                    ],
                                ],
                            },
                        }
                    },
                ]
            }
        ]
    }
});
