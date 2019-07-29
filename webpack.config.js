const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

const config = {
	mode: "development",
	entry: "./src/js/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
		{
			test: /\.html$/,
			use: [
				{
					loader: "html-loader",
					options: { minimize: false }
				}
			]
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: "babel-loader"
		},

		// {
		// 	test: /\.(sa|sc|c)ss$/,
		// 	use: [
		// 	{
		// 		loader: MiniCssExtractPlugin.loader,
		// 		options: {
		// 			hmr: process.env.NODE_ENV === 'development',
		// 		},
		// 	},
		// 	"css-loader",
		// 	"postcss-loader",
		// 	"sass-loader",
		// 	],
		// },

		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/html/index.html",
			filename: "./index.html",
		}),
	]
};

module.exports = config;