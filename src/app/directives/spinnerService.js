(function(){
	'use strict';

	angular
		.module('app.common')
		.service('SpinnerService', SpinnerService);

	SpinnerService.$inject = [];

	function SpinnerService()
	{
		var spinners = {};

		this.addSpinner = registerSpinner;
		this.getSpinners = getSpinners;
		this.show = show;
		this.hide = hide;
		this.getSpinner = getSpinner;
		this.isShown = getShow;

		///////
		function getSpinners(){
			return spinners;
		}

		function getSpinner(name){
			return spinners[name];
		}

		function registerSpinner(spinner){
			spinners[spinner.name] = spinner;

		}

		function show(name){
			spinners[name].show();
		}

		function getShow(name){
			return spinners[name].isShown;
		}

		function hide(name){
			spinners[name].hide();
		}
	}
})();