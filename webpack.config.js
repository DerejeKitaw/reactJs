var webpack =require("webpack");
var path= require("path");

// Setup distribuition directory
var DIST_DIR = path.resolve(__dirname, "dist");
// Setup source directory
var SRC_DIR = path.resolve(__dirname, "src");

var config ={
    entry: SRC_DIR + "/app/index.js",
    output:{
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    modules:{
        loaders:[
            {
                test: /\.js?/,
                include:SRC_DIR,
                loader:"babel-loader",
                query: {
                    preset: ["react", "es2015","stage-2"]
                }
            }
        ]
    }
}
