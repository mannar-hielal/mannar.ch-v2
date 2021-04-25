// this runs with npm start build
// it throws out a dist dic with minified js and hashed js file name
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        path: require('path').resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.[contenthash].js',
        assetModuleFilename: 'images/[hash][ext]',
        clean: true
    }
});
