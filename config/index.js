
const path = require("path");

module.exports = {

    dev: {

        server: {

            contentBase: path.resolve(__dirname, "../dist"),
            hot :  true,
            open: true,
            host: "localhost",
            port: 8081,
            compress: true,
            historyApiFallback: true,
            overlay: false
        }
    }
}
