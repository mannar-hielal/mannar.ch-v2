module.exports={
    // define entry point
    entry: {
        main: './app/js/main.js'    },
    // define output point
    output: {
        path: require('path').resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
};
