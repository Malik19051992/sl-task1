var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/app/main.ts'
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve('src/tsconfig.json') }
                } , 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: path.resolve( 'src'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            },
            {
                test: /\.css$/,
                include: path.resolve( 'src'),
                loader: 'raw-loader'
            }]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\|\/)core(\|\/)(esm(\|\/)app|app)(\|\/)linker/,
            path.resolve('./app'),
            {}
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['src', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),

        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            }
        })
    ],
    watch:true
};