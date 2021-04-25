// this runs with npm start,
// code is not minified, js file name is not hashed
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: './src/script-1.js',
    output: {
        path: require('path').resolve(__dirname, 'dist'),
        filename: 'bundle-dev.js'
    }
});
