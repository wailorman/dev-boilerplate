const NODE_ENV = process.env.NODE_ENV == 'production' ? 'production' : 'development';
var webpack = require('webpack');

var webpackConfig = {
    entry: './entry.js',
    output: {
        filename: './dist/bundle.js'
    },

    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]

    },

    plugins: []
};

if (NODE_ENV == 'development') {

    webpackConfig.watch = true;
    webpackConfig.devtool = 'cheap-inline-module-source-map';

}

if (NODE_ENV == 'production') {
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );

    webpackConfig.devtool = null;
}

module.exports = webpackConfig;