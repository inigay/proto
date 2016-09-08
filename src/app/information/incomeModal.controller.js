(function() {
	'use strict';

	angular
		.module('app.info')
		.controller('IncomeModalController', IncomeModalController);

	IncomeModalController.$inject = ['$uibModalInstance', '$scope','header'];

	function IncomeModalController($uibModalInstance, $scope, header){
		
		$scope.confirm = confirmFunction;
		$scope.cancel = cancelFunction;
		$scope.header = header;

		function confirmFunction(){
			$uibModalInstance.close(true);
		}

		function cancelFunction(){
			$uibModalInstance.dismiss('cancel');
		}
	}
})();