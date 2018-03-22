angular.module('transactionLineageController', [])

    // inject the UtxoPreview service factory into our controller
    .controller('transactionLineageController', function($scope, $http, BlockChainInfo) {
        vm = this;
        vm.getRawAddress = function(address){
            BlockChainInfo.getRawAddress(address).then(function(data){
                vm.getRawAddress = data;
            })
        }

    });
