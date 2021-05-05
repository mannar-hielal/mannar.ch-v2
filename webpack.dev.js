// this runs with npm start,
// code is not minified, js file name is not hashed
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'development',
    output: {
        path: require('path').resolve(__dirname, 'dist'),
        filename: '[name].bundle-dev.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    }
});
