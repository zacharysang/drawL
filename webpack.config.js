const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "webapp", "index.js"),
    output: {
        path: path.resolve(__dirname,'webapp'),
        filename: "main.js"
    },
    node: {
        "module": "empty",
        "fs": "empty",
    }
}