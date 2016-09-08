(function() {
	'use strict';

	angular
		.module('app.home')
		.controller('PersonalInfoController', PersonalInfo);

	PersonalInfo.$inject = ['$state', 'motoapi', 'SpinnerService'];

	function PersonalInfo($state, motoapi, SpinnerService){
		var spinner = SpinnerService.getSpinner('infoSpin');
		var vm = this;
		
		vm.info = undefined;
		vm.save = save;
		vm.spinner = spinner;
		

		activate();


		function activate(){
			motoapi.getPersonalInfo().then(successFunction, errorFunction).finally(finallyFunction);

			function successFunction(data){
				
				vm.info = data;
			}

			function errorFunction(data){

			}

			function finallyFunction(){
				vm.spinner.hide();
			}
		}

		function save(){
			motoapi.savePersonalInfo(vm.info).then(successFunction, errorFunction);
			
			function successFunction(res){
				$state.go('home',{}, {reload:true});
			}

			function errorFunction(res){
				console.log(res);
			}
			
		}
	}
})();