(function() {
	'use strict';

	angular
		.module('app.verification')
		.factory('Verification', Verification);

	Verification.$inject = [];

	function Verification(){

		function Verification(name, type, label, status, source, messages){
            var additionalInfo = {
            	source: source,
            	messages: messages
            };

            this.name = name;
            this.type = type;
            this.label = label;
            this.status = status;
            this.additionalInfo = additionalInfo;
    	}

        Verification.build = build;
        
		return Verification;

		////////////////////
		function build(data){
			return new Verification(
				data.name, 
				data.type, 
				data.label, 
				data.status, 
				data.additionalInfo.source, 
				data.additionalInfo.messages
			);
		}
	}

})();