const path = require('path')

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        historyApiFallback: true,
    },
    entry: path.resolve(__dirname, './src/index.js'),
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,

            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },

                    {
                        loader: 'sass-loader',
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: 'bundle.js',
    },
}