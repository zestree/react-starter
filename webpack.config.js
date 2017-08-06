var path = require('path');
var node_modules = path.join(__dirname, 'node_modules/');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'react': node_modules + 'react',
            'react-dom': node_modules + 'react-dom'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']}
        ]
    },
    watch: true
}
