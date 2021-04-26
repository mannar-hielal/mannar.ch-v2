// this runs with npm start build
// it throws out a dist dic with minified js and hashed js file name
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        path: require('path').resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.[contenthash].js',
        assetModuleFilename: 'images/[name][hash][ext]',
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
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
