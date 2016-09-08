(function(){
	'use strict';

	angular
		.module('app.verification')
		.controller('VerificationController', VerificationController);

	VerificationController.$inject = ['$state', 'SpinnerService', 'motoapi'];

	function VerificationController($state, SpinnerService, motoapi){
		var vm = this;
		vm.verificationList = undefined;
		
		//console.log(SpinnerService.getSpinners());
		getVerification();


		
		///////////////
		function getVerification(){
			SpinnerService.show('verificationSpin');
			return motoapi.getVerification().then(successFunction, errorFunction).finally(finallyFunction);

			function successFunction(data){
				vm.verificationList = data;
			}

			function errorFunction(){

			}

			function finallyFunction(){
				SpinnerService.hide('verificationSpin');
			}
		}
	}

})();