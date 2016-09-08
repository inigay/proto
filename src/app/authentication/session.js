(function() {
	'use strict';

	angular
		.module('app.auth')
		.service('session', SessionService);

	SessionService.$inject = ['$sessionStorage'];


	function SessionService($sessionStorage){
		
		var storage = $sessionStorage;
		
		this.setToken = setToken;
		this.clearToken = clearToken;
		this.getToken = getToken;
		this.isLoggedIn = isLoggedIn;
		
		

		///////////////////////////////////
		function setToken(token){
			storage.token = token;
		}

		function clearToken(){
			storage.$reset();
		}

		function getToken(){
			
			return storage.token;
		}

		function isLoggedIn(){
			return !!storage.token;
		}
	}


})();