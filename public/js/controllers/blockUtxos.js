angular.module('blockUtxosController', [])

.controller('blockUtxosController', function($scope, $http, BlockHeight, BlockSearchHistory, BlockChainInfo){
    this.getBlockFromNumber = function(blockNum){
        vm = this;
        BlockHeight.get(blockNum)
        .then(function(data) {
            
            vm.blockHash = data.data.blockhash || data.data.data.blockhash;
            $scope.$apply();

            BlockSearchHistory.create(blockNum, vm.blockHash, new Date())
            .then(function(result){
               
            },function(err){

            });

            BlockChainInfo.getBlockByHash(vm.blockHash)
            .then(function(result){
                vm.blockInfo = result.data;
            },function(err){
                var ex = error;
            });
            
        },
        function(error){
            var ex = error;
        });
    }
});