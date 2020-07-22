

const path = require("path");

const HappyPack = require("happypack"); // 使用多线程构建项目

const config    = require("../config/index");

const baseWebpackConfig = require("./webpack.base.conf");

const HotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");

const { merge } = require("webpack-merge");

module.exports = merge(baseWebpackConfig, {


    entry: path.resolve(__dirname, "../src/index.js"),

    module: {

        rules: [

            {
                test: /\.js$/,
                use: ["happypack/loader?id=babel"],
                exclude: path.resolve(__dirname, '../node_modules')
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: ["happypack/loader?id=url"]
            }
        ]
    },
    plugins:[

        new HappyPack({

            id: 'babel',
            loaders:["babel-loader?cacheDirectory=true"],
        }),

        new HappyPack({

            id : 'url',
            loaders:['url-loader'],
        }),

        new HotModuleReplacementPlugin()
    ],

    devServer: {

        ...config.dev.server
    },

    watch: true,

    watchOptions:{

        ignored: /node_modules/,
        aggregateTimeout:300,
        poll:4000
    }
})
