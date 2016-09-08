(function() {
	'use strict';

	angular
		.module('app.core')
		.service('webservice', motoapi);

	motoapi.$inject = ['session', '$http'];

	function motoapi(session, $http) {
		
		var mainUrl = 'http://consumer.app/';

		var service = {
			login: login,
			getVerification: getVerification,
			getPersonalInfo: getPersonalInfo,
			savePersonalInfo: savePersonalInfo,
			getHousingInfo: getHousingInfo,
			saveHousingInfo: saveHousingInfo,
			getIncomeInfo: getIncomeInfo,
			saveIncomeInfo: saveIncomeInfo,
			getBankingInfo: getBankingInfo,
			saveBankingInfo: saveBankingInfo,
			getReferenceInfo: getReferenceInfo,
			saveReferenceInfo: saveReferenceInfo
		};

		return service;

		////////////////////////
		function login(password){
			var loginUrl = mainUrl + 'login';

			return $http.post(loginUrl, {
				password: password
			});
		}

		function getVerification(){
			var uri = mainUrl + '/api/verification';

			return $http.get(uri,{
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function getPersonalInfo(Personal){
			var uri = mainUrl + 'api/information/personal';

			return $http.get(uri,{
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function savePersonalInfo(info){
			var uri = mainUrl + 'api/information/personal';

			return $http.post(uri, info, {
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function getHousingInfo(House){
			var uri = mainUrl + 'api/information/housing';

			return $http.get(uri,{
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function saveHousingInfo(info){
			var uri = mainUrl + 'api/information/housing';

			return $http.post(uri, info, {
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function getIncomeInfo(res){
			var uri = mainUrl + 'api/information/income';

			return $http.get(uri,{
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function saveIncomeInfo(info){
			var uri = mainUrl + 'api/information/income';

			return $http.post(uri, info, {
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function getBankingInfo(res){
			var uri = mainUrl + 'api/information/banking';

			return $http.get(uri,{
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function saveBankingInfo(info){
			var uri = mainUrl + 'api/information/banking';

			return $http.post(uri, info, {
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function getReferenceInfo(res){
			var uri = mainUrl + 'api/information/reference';

			return $http.get(uri,{
				headers: {
					Authorization: session.getToken()
				}
			});
		}

		function saveReferenceInfo(info){
			var uri = mainUrl + 'api/information/reference';

			return $http.post(uri, info, {
				headers: {
					Authorization: session.getToken()
				}
			});
		}


	}

})();