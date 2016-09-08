(function() {
	'use strict';

	angular
		.module('app.core')
		.run(runCore);

	runCore.$inject = ['$rootScope', 'session'];

	function runCore($rootScope, session){

		//check if logged in before making http calls
		$rootScope.$on('$stateChangeStart', stateChangeStart);


		//////////////
		function stateChangeStart(event, toState){
			if(toState.name !== 'login' && !session.isLoggedIn()){
				$rootScope.$broadcast('InvalidToken');
				event.preventDefault();
			}
		}
	}
})();