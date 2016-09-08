(function() {
	'use strict';

	angular
		.module('app.info')
		.factory('Banking', Banking);

	Banking.$inject = [];

	function Banking(){
		function Banking(
			accountType,
			routingNumber,
			accountNumber,
			institution,
			city,
			state,
			name
			)
		{
            this.accountType = accountType;
            this.routingNumber = routingNumber;
            this.accountNumber = accountNumber;
            this.institution = institution;
            this.city = city;
            this.state = state;
            this.name = name;
            
        }

        Banking.build = build;

        return Banking;


        //////////
        function build(data){
        	return new Banking(
        		data.accountType,
				data.routingNumber,
				data.accountNumber,
				data.institution,
				data.city,
				data.state,
				data.name
        		);
        }
	}
})();