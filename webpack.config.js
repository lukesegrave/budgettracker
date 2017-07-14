module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
	  root:__dirname,
	  alias:{
	  Main     : 'app/components/Main.jsx', 
	  Income   : 'app/components/Income.jsx',
	  Expenses : 'app/components/Expenses.jsx',
	  Total    : 'app/components/Total.jsx',
	  },
     extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
	devtool: 'cheap-module-eval-source-map'
};
