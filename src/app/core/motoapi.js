(function() {
	'use strict';

	angular
		.module('app.core')
		.service('motoapi', MotoApi);

	MotoApi.$inject = [
		'session', 
		'webservice', 
		'$rootScope', 
		'$q', 
		'Verification', 
		'Personal',
		'Housing',
		'Income',
		'SpinnerService',
		'Banking',
		'Reference'
	];
	/* jshint maxparams : 13 */
	function MotoApi(
		session, 
		webservice, 
		$rootScope, 
		$q, 
		Verification, 
		Personal, 
		Housing, 
		Income, 
		SpinnerService, 
		Banking,
		Reference
	)
	{
		var service = {
			authenticate: authenticate,
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

		///////////////////
		function authenticate(password){
			return webservice.login(password).then(loginSuccess, loginError);


			function loginSuccess(res){
				/*jshint camelcase: false */
				session.setToken(res.data.access_token);
				//console.log(res.data.access_token);

			}

			function loginError(res, status){
				$rootScope.$broadcast('LoginFailure');
				return $q.reject(res.data);
			}
		}


		function getVerification(){
			return webservice.getVerification().then(successFunction, errorFunction);

			function successFunction(res){
				//always array
				return res.data.map(Verification.build);
			}

			function errorFunction(res){
				$rootScope.$broadcast('UnauthorizedAttempt');
				return $q.reject(res.data);
			}
		}

		function getPersonalInfo(res){
			SpinnerService.show('infoSpin');
			return webservice.getPersonalInfo().then(successFunction, errorFunction);

			function successFunction(res){
				return Personal.build(res.data);
			}

			function errorFunction(res){
				$rootScope.$broadcast('UnauthorizedAttempt');
				return $q.reject(res.data);
			}
		}

		function savePersonalInfo(info){
			return webservice.savePersonalInfo(info);
		}

		function getHousingInfo(){
			SpinnerService.show('infoSpin');
			return webservice.getHousingInfo().then(successFunction, errorFunction);

			function successFunction(res){
				return Housing.build(res.data);
			}

			function errorFunction(res){
				$rootScope.$broadcast('UnauthorizedAttempt');
				return $q.reject(res.data);
			}
		}

		function saveHousingInfo(info){
			return webservice.saveHousingInfo(info);
		}

		function getBankingInfo(){
			SpinnerService.show('infoSpin');
			return webservice.getBankingInfo().then(successFunction, errorFunction);

			function successFunction(res){
				return Banking.build(res.data);
			}

			function errorFunction(res){
				$rootScope.$broadcast('UnauthorizedAttempt');
				return $q.reject(res.data);
			}
		}

		function saveBankingInfo(info){
			return webservice.saveBankingInfo(info);
		}

		function getReferenceInfo(){
			SpinnerService.show('infoSpin');
			return webservice.getReferenceInfo().then(successFunction, errorFunction);

			function successFunction(res){
				//always array
				return res.data.map(Reference.build);
			}

			function errorFunction(res){
				$rootScope.$broadcast('UnauthorizedAttempt');
				return $q.reject(res.data);
			}
		}

		function saveReferenceInfo(info){
			return webservice.saveReferenceInfo(info);
		}
		

		function getIncomeInfo(){
			SpinnerService.show('infoSpin');
			return webservice.getIncomeInfo().then(successFunction, errorFunction);

			function successFunction(res){
				return res.data.map(Income.build);
			}

			function errorFunction(res){
				$rootScope.$broadcast('UnauthorizedAttempt');
				return $q.reject(res.data);
			}
		}

		function saveIncomeInfo(info){
			var infoList = [];
			
			angular.forEach(info, function(value, key){
				if(value.getType() === 'current'){
					infoList.push({
						incomeType : value.incomeType,
						fields: {
							employmentStatus : value.employmentStatus,
							employer : value.employer,
							position : value.position,
							dateOfHire : value.dateOfHire,
							employerPhone : value.employerPhone,
							monthlyPay : value.monthlyPay
						}
						
					});
				}else{
					infoList.push({
						incomeType : value.incomeType,
						fields: {
							description : value.description,
							monthlyPay : value.monthlyPay
						}
						
					});
				}
			});

			return webservice.saveIncomeInfo(infoList);
		}

	}

})();