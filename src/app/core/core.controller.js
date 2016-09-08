(function() {
	'use strict';

	angular
		.module('app.core')
		.controller('CoreController', CoreController);

	CoreController.$inject = ['session', '$state', '$scope', 'SpinnerService'];

	function CoreController(session, $state, $scope, SpinnerService) {
		var vm = this;
		
		vm.isLoggedIn = session.isLoggedIn();
		vm.setValue = session.setToken;
		vm.logout = logout;
		vm.show = function(name){
			console.log(name);
			console.log(SpinnerService.getSpinners());
			SpinnerService.show(name);
		};

		vm.hide = function(name){
			SpinnerService.hide(name);
		};

		//Login Messages
		vm.loginErrorMessage = undefined;

		//Watch if user is still logged in
		$scope.$on('InvalidToken', invalidToken);
		$scope.$on('UnauthorizedAttempt', unauthorizedAttempt);

		////
		function logout(){
			session.clearToken();
			$state.go('login');
		}

		function invalidToken(event){
			$state.go('login');
			vm.loginErrorMessage = 'Please Sign In';
		}

		function unauthorizedAttempt(event){
			$state.go('login');
			vm.loginErrorMessage = 'Unauthorized Access Prevented';
			event.preventDefault();
		}
	}
})();