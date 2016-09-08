module.exports = function() {
	var client = './src/';
	var temp = './src/.temp/';

	var config = {
		//all js to process
		alljs: [
			'./src/**/*.js',
			'./*.js'
		],

		devindex: client + 'index.html',
		
		js: [
			client + 'app/**/*.module.js',
			client + 'app/**/*.config.js',
			client + 'app/**/*.js',
		],

		css: client + 'styles/css/',

		client: client,

		temp: temp,

		sass: client + 'styles/sass/styles.scss',



		//BOWER LOCATIONS
		bower: {
			json: require('./bower.json'),
			directory: './bower_components/',
			ignorePath: '../..'
		}
	};



	config.getWiredepDefaultOptions = function() {
		var options = {
			bowerJson: config.bower.json,
			directory: config.bower.directory,
			ignorePath: config.bower.ignorePath
		};

		return options;
	};

	return config;
};