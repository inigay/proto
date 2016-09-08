(function() {
	'use strict';

	angular
		.module('app.auth')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['motoapi', '$state', '$scope', 'session','SpinnerService'];

	function LoginController(motoapi, $state, $scope, session, SpinnerService){
		var vm = this;

		vm.authenticate = authenticate;
		vm.password = undefined;
		vm.message = undefined;
		vm.spin = false;
		///
		function authenticate(){
			SpinnerService.show('loginSpin');

			if($scope.loginForm.$valid){
				motoapi.authenticate(vm.password).then(successFunction, errorFunction).finally(finallyFunction);
			}else{
				SpinnerService.hide('loginSpin');

				//below means the loginForm was touched
				$scope.loginForm.$pristine = false;
			}
			

			function successFunction(){
				console.log(session.getToken());
				$state.go('home');
			}

			function errorFunction(data){
				//console.log(data);
				vm.message = data;
				
			}

			function finallyFunction(){
				SpinnerService.hide('loginSpin');
			}

		}
	}
})();