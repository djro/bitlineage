var coreApp = angular.module('btcUtxoPreview', ['utxoPreviewController', 'utxoPreviewService']);

// coreApp.config(function($stateProvider, $urlRouterProvider){
//     $urlRouterProvider.otherwise('/home');

//     $stateProvider

//         .state('home', {
//             url:'/home',
//             templateUrl: 'partial-home.html',
//             controller: 'mainController'
//         })

//         .state('blocks',{
//             url:'/blocks',
//             templateUrl: 'partial-blocks.html',
//             controller: 'blockUtxosController'
//         })
// });    