var coreApp = angular.module('btcUtxoPreview', ['transactionLineageController', 'utxoPreviewController', 'utxoPreviewService', 'blockUtxosController', 'blockHeightService', 'blockSearchHistoryService', 'blockchaininfoService','ui.router']);

coreApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url:'/home',
            templateUrl: 'partial-transaction-view.html',
            controller: 'transactionLineageController as vm'
        })

        .state('blocks',{
            url:'/blocks',
            templateUrl: 'partial-blocks.html',
            controller: 'blockUtxosController as vm'
        })
});    