angular.module('blockUtxosController', [])

.controller('blockUtxosController', function($scope, $http, BlockHeight, BlockSearchHistory, BlockChainInfo){
    this.getBlockFromNumber = function(blockNum){
        vm = this;
        BlockHeight.get(blockNum)
        .then(function(data) {

            vm.blockHash = data.data.blockhash;
            $scope.$apply();

            BlockSearchHistory.create(blockNum, vm.blockHash, new Date())
            .then(function(data){
               
            });

            BlockChainInfo.getBlockByHash(vm.blockHash)
            .then(function(data){
                vm.blockInfo = data;
            });
            
        });
    }
});