(function(){
	'use strict';

	angular
		.module('app.info')
		.factory('Income', Income);

	Income.$inject = [];

	function Income(){

		function Income(
			incomeType,
			employmentStatus,
			employer,
			position,
			dateOfHire,
			employerPhone,
			monthlyPay
		)
		{
			this.incomeType = incomeType;

			if(incomeType === 'current'){
				
				this.employmentStatus = employmentStatus;
				this.employer = employer;
				this.position = position;
				this.dateOfHire = dateOfHire;
				this.employerPhone = employerPhone;
				this.monthlyPay = monthlyPay;
			}else if(typeof incomeType === 'undefined'){
				this.incomeType = '';
				this.fields = {};
			
			}
			/* jshint ignore:start */
			else{
				//if not current Employed status constructor will create
				//partial object in case of military or netRentalIncome etc.
				//signature is new Income('netRentalIncome', 'Some Description', '500.00');
				
				this.description = employmentStatus,
				this.monthlyPay = employer;
				
			}
			/* jshint ignore:end */

			
		}

		Income.build = build;

		Income.prototype.getType = getType;

		return Income;

		////////
		function build(data){

			if(data.incomeType === 'current'){
				return new Income(
					data.incomeType,
					data.fields.employmentStatus,
					data.fields.employer,
					data.fields.position,
					data.fields.dateOfHire,
					data.fields.employerPhone,
					data.fields.monthlyPay
				);
			}else{
				return new Income(
					data.incomeType, 
					data.fields.description, 
					data.fields.monthlyPay
				);
			}
			
		}

		function getType(){
			return this.incomeType;//jshint ignore:line
		}
	}
})();