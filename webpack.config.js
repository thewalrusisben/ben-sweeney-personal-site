const nodeExternals = require('webpack-node-externals');

module.exports = [{
    entry: {
        "browser": "./app/index.tsx"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: 'dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
},
{
    entry: {
        "server": "./server.ts"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    target: "node",
    externals: [nodeExternals()]
}];