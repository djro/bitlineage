var coreApp = angular.module('btcUtxoPreview', ['utxoPreviewController', 'utxoPreviewService', 'blockUtxosController', 'blockHeightService', 'ui.router']);

coreApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url:'/home',
            templateUrl: 'partial-home.html',
            controller: 'utxoPreviewController'
        })

        .state('blocks',{
            url:'/blocks',
            templateUrl: 'partial-blocks.html',
            controller: 'blockUtxosController as vm'
        })
});    