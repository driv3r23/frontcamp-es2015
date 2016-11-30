const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./index",
    output: {
        path: __dirname + "/public",
        filename: "[name].js"
    },
    resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ["", ".js"]
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"],
        moduleTemplates: ["*-loader", "*"],
        extensions: ["", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style", "css!less")
            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    devtool: "eval",
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    devServer: {
        host: "localhost",
        port: 8000
    }
};