/**
 * Created by Administrator on 2017/4/21 0021.
 */
var PROD = process.argv.indexOf('-p') >= 0;
var webpack = require("webpack");
var path = require("path");
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
module.exports = {
    plugins: PROD ? [ UglifyJsPlugin ]:[],
    entry : {
        index : path.resolve(__dirname ,'./src/index.js') ,
        domReady : path.resolve(__dirname ,'./src/domReady.js')
    } ,
    module : {
        loaders : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output : {
        libraryTarget: 'umd',
        filename: PROD? '[name].min.js':'[name].js',
        path: path.resolve(__dirname , './dist')
    },
    resolve : {
        extensions : [".js"]
    }
}
