// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development', // or 'production' for production builds
    entry: './src/index.js', // Your main entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output filename
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        historyApiFallback: true, // Enable SPA routing
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Add more rules for other file types (e.g., images, fonts) if needed
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Allow importing .js and .jsx files without specifying the extension
    },
};