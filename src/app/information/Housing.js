(function() {
	'use strict';

	angular
		.module('app.info')
		.factory('Housing', Housing);

	Housing.$inject = [];

	function Housing(){
		
		function Housing(
			address,
			city,
			state,
			zip,
			addressSince,
			ownershipType,
			monthlyPayment
			)
		{
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.addressSince = addressSince;
            this.ownershipType = ownershipType;
            this.monthlyPayment = monthlyPayment;
            
        }

        Housing.build = build;

        return Housing;


        //////////
        function build(data){
        	return new Housing(
        		data.address,
				data.city,
				data.state,
				data.zip,
				data.addressSince,
				data.ownershipType,
				data.monthlyPayment
        		);
        }
	}
})();