(function(){
	'use strict';

	angular
		.module('app.common')
		.directive('appSpinner', AppSpinner);

	AppSpinner.$inject = ['SpinnerService'];

	function AppSpinner(SpinnerService){

		return {
				restrict: 'EA',
				replace: true,
				transclude: true,
				priority: 3,
				scope: {
					name: '@?',
					show: '=?',
					height: '@?',
					width: '@?'
				},
				template: '<div class="spinner" ng-show="show" style="width:{{width}};height:{{height}}">' + 
				'<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw margin-bottom"></i></div>',
				controller: function($scope, SpinnerService){
					$scope.show = false;
					var spinnerObject = {
							name: $scope.name,
							show: function(){
								$scope.show = true;
							},
							hide: function(){
								$scope.show = false;
							},
							isShown: function(){
								return $scope.show;
							}
					};

					SpinnerService.addSpinner(spinnerObject);
					
					
				}
			};
	}
})();