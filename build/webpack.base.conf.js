
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin"); // 抽取html，动态插入js


module.exports = {

    output: {

        filename: "[name]_[hash:16].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },

    plugins: [

        new HtmlWebpackPlugin({

            title:"学习webpack",
            template: path.resolve(__dirname, "../public/index.html"),
            filename:'index.html',
            inject:'body',
            minify: {

                removeComments:true,
                collapseWhitespace:true,
                removeAttributeQuotes:true
            }
        })
    ]
}
