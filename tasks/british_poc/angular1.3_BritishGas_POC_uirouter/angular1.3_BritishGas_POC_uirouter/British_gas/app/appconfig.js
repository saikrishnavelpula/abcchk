'use strict'
angular.module("britishGas")
	   .config(businessConfig);

function businessConfig($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/business');
    // HOME AND BUISENESS NESTED VIEWS ========================================
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html'
        })
        .state('business', {
            url: '/business',
            templateUrl: 'app/Business/Business.html'
        })
        .state('business.Business_gas', {
            url: '/Business_gas',
            templateUrl: 'app/BusinessGas/BusinessGas.html'
        })
        .state('business.Business_electricity', {
            url: '/Business_electricity',
            templateUrl: 'app/BusinessElectricity/BusinessElectricity.html'
        });
}