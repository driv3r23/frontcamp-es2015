const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['webpack-hot-middleware/client', './index'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './scripts/[name].js',
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'ng-annotate!babel?presets[]=es2015,presets[]=stage-0,presets[]=react'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            }
        ]
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 300
    },
    devtool: NODE_ENV == 'development' ? 'eval' : null,
    plugins: [
        new ExtractTextPlugin('./stylesheets/[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}