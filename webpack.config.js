const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');


var apiHost;

var setupAPI = function(env) {
    console.log("setup API " + env["NODE_ENV"])
    switch (env["NODE_ENV"]) {
        case 'production':
            apiHost = JSON.stringify("http://floxxbackend.cleverapps.io/")
            break;
        case 'development':
            apiHost = JSON.stringify("http://localhost:8081/")
            break;
        default:
            apiHost = JSON.stringify("Not defined")
            break;
    }
}

module.exports = env => {
    setupAPI(env);
    return {
        entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
        output: {
            path: __dirname + '/dist', // Folder to store generated bundle
            filename: 'bundle.js', // Name of generated bundle after build
            publicPath: '/' // public URL of the output directory when referenced in a browser
        },
        plugins: [ // Array of plugins to apply to build chunk
            new HtmlWebpackPlugin({
                template: __dirname + "/src/public/index.html",
                inject: 'body'
            }),
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                BACKEND_URL: apiHost
            })
        ],
        devServer: { // configuration for webpack-dev-server
            contentBase: './src/public', //source of static assets
            port: 8080, // port to run dev-server
            host: '0.0.0.0',
            disableHostCheck: true
        },
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm.js'
            }
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }]
        }
    }
}