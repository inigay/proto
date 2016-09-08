(function() {
	'use strict';

	angular
		.module('app.info')
		.factory('Personal', Personal);

	Personal.$inject = [];

	function Personal(){
		/*jshint maxparams:13 */
		function PersonalInfo(
			title,
			firstName,
			mi,
			lastName,
			ssn,
			dob,
			licenseState,
			licenseId,
			citizenStatus,
			alienId,
			phones,
			email
			)
		{
            this.title = title;
            this.firstName = firstName;
            this.mi = mi;
            this.lastName = lastName;
            this.ssn = ssn;
            this.dob = dob;
            this.licenseState = licenseState;
            this.licenseId = licenseId;
            this.citizenStatus = citizenStatus;
            this.alienId = alienId;
            this.phones = phones;
            this.email = email;
        }

        PersonalInfo.build = build;

        return PersonalInfo;


        //////////
        function build(data){
        	return new PersonalInfo(
        		data.title,
				data.firstName,
				data.mi,
				data.lastName,
				data.ssn,
				data.dob,
				data.licenseState,
				data.licenseId,
				data.citizenStatus,
				data.alienId,
				data.phones,
				data.email
        		);
        }
	}
})();