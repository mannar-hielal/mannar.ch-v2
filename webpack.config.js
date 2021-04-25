module.exports={
    // define entry point
    entry: {
        main: './app/js/main.js'
    },
    // define output point
    output: {
        path: require('path').resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
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
        ]
    }
};
