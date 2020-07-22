
const path = require("path");

const miniCssExtractPlugin  = require('mini-css-extract-plugin');
const {merge}               = require("webpack-merge");
const {CleanWebpackPlugin}  = require("clean-webpack-plugin"); // 每次插入到dist文件之前，先清空dist文件夹

const baseWebpackConfig     = require("./webpack.base.conf");

module.exports = merge(baseWebpackConfig, {

    entry : './src/index.js',

    module:{

        rules:[
            {

                test: /\.js$/,
                use:[{

                    loader: "babel-loader",
                    options:{

                        presets:['@babel/preset-env']
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [

                    {loader:miniCssExtractPlugin.loader},
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
                exclude: /nodule_modules/
            }
            ]
    },
    plugins:[

        new CleanWebpackPlugin()
    ]
})
