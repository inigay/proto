(function() {
	'use strict';

	angular
		.module('app.info')
		.factory('Reference', Reference);

	Reference.$inject = [];

	function Reference(){
		function Reference(
			fullName,
			relationship,
			address,
			city,
			state,
			zip,
			email,
			phone
			)
		{
            this.fullName = fullName;
            this.relationship = relationship;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.email = email;
            this.phone = phone;
            
        }

        Reference.build = build;

        return Reference;


        //////////
        function build(data){
        	return new Reference(
        		data.fullName,
				data.relationship,
				data.address,
				data.city,
				data.state,
				data.zip,
				data.email,
				data.phone
        		);
        }
	}
})();