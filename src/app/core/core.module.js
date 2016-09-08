(function() {
	'use strict';

	angular
		.module('app.core', [
			'ui.router', 
			'app.auth',
			'app.home',
			'app.common',
			'ui.bootstrap'
		]);

})();