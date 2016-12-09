const NODE_ENV = process.env.NODE_ENV || "development";

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ["webpack-dev-server/client?http://localhost:8000/", "webpack/hot/dev-server", "./index"],
    output: {
        path: __dirname + "/public",
        publicPath: "/",
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
    watch: NODE_ENV == "development",
    watchOptions: {
        aggregateTimeout: 300
    },
    devtool: NODE_ENV == "development" ? "eval" : null,
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    devServer: {
        host: "localhost",
        port: 8000,
        hot: true
    }
};

if (NODE_ENV == "production") {
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