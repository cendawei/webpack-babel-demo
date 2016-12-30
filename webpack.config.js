/**
 * Created by admin on 2016/11/1.
 */
var config = {
    entry: './app.js',

    output: {
        path:'./build',
        filename: 'app.js',
    },

    /*devServer: {
        inline: true,
        port: 8888
    },*/

    module: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }

}

module.exports = config;