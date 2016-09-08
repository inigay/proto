(function(){
	'use strict';

	angular
		.module('app.info')
		.controller('IncomeInfoController', IncomeInfoController);

	IncomeInfoController.$inject = ['$state', 'motoapi', 'Income', 'SpinnerService', '$uibModal'];

	function IncomeInfoController($state, motoapi, Income, SpinnerService, $uibModal){
		var spinner = SpinnerService.getSpinner('infoSpin');
		var vm = this;
		vm.infoList = [];
		vm.save = save;
		vm.spinner = spinner;
		vm.confirmDelete = confirmDelete;
		vm.modal = false;
		vm.addIncomeSource = addIncomeSource;

		activate();


		function activate(){
			motoapi.getIncomeInfo().then(successFunction, errorFunction).finally(finallyFunction);

			function successFunction(data){
				if(data.length == 0)
					vm.infoList.push(new Income());
				else
					vm.infoList = data;
			}

			function errorFunction(data){

			}

			function finallyFunction(){
				vm.spinner.hide();
			}
		}

		//////
		function save(){
			motoapi.saveIncomeInfo(vm.infoList).then(successFunction, errorFunction);

			function successFunction(){
				$state.go('home',{},{reload: true});
			}

			function errorFunction(data){
				console.log(data);
			}
		}

		function addIncomeSource(){
			vm.infoList.push(new Income());
		}

		function confirmDelete(key){
			

		 	var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: 'app/information/incomeModal.html',
		      controller: 'IncomeModalController',
		      resolve: {
		      	header: function(){
		      		return vm.infoList[key].employer || vm.infoList[key].incomeType || 'Source Header'
		      	}
		      }
		    });

		    modalInstance.result.then(function(confirmed){
		    	vm.infoList.splice(key, 1);
		    }, function(){});

		}

	}
})();