(function() {
	angular
		.module('app.core')
		.config(CoreConfig);

	CoreConfig.$inject = ['$locationProvider','$stateProvider', '$urlRouterProvider'];

	function CoreConfig($locationProvider,$stateProvider, $urlRouterProvider){


		$urlRouterProvider.otherwise('/');

		$stateProvider
            .state('login',{
                    
                    url: '/login',
                    templateUrl: 'app/authentication/login.html',
                    controller: 'LoginController',
                    controllerAs: 'login'
                    
                }).state('home',{
                
                    url: '/',
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'home',
                	
                    
                }).state('personal', {
                    parent:'home',
                    url: 'info/personal',
                    templateUrl: 'app/information/personal.html',
                    controller: 'PersonalInfoController',
                    controllerAs: 'person'
                    
    
                }).state('housing', {
                    parent:'home',
                    url: 'info/housing',
                    templateUrl: 'app/information/housing.html',
                    controller: 'HousingInfoController',
                    controllerAs: 'house'
                    
    
                }).state('income', {
                    parent:'home',
                    url: 'info/income',
                    templateUrl: 'app/information/income.html',
                    controller: 'IncomeInfoController',
                    controllerAs: 'income',
                    
    
                }).state('banking', {
                    parent:'home',
                    url: 'info/banking',
                    templateUrl: 'app/information/banking.html',
                    controller: 'BankingInfoController',
                    controllerAs: 'banking',
                    
    
                }).state('reference', {
                    parent:'home',
                    url: 'info/reference',
                    templateUrl: 'app/information/reference.html',
                    controller: 'ReferenceInfoController',
                    controllerAs: 'reference',
                    
    
                });

	}

})();