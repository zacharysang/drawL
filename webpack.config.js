const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "webapp_src", "index.js"),
    output: {
        path: path.resolve(__dirname,'webapp'),
        filename: "main.js"
    },
    node: {
        "module": "empty",
        "fs": "empty",
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        ascii_only: true
                    }
                }
            }),
        ]
    }
}