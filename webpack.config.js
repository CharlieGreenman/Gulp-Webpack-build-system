module.exports = {
  entry: ["./app/js/index.js", "file?name=index.html!jade-html!./app/jade/index.jade"],
  output: {

        path: "./dist/js",
        filename: "bundle.js"
    },
  module: {
    loaders: [
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.jade$/,  loader: 'jade-html-loader'},
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
      //image min loader
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }

    ]
  },
  resolve: {
      extensions: ['', '.js', '.jade', 'scss']
   }
};
