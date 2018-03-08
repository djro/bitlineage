angular.module('blockUtxosController', [])

.controller('blockUtxosController', function($scope, $http, BlockHeight, BlockSearchHistory){
    this.getBlockFromNumber = function(blockNum){
        vm = this;
        BlockHeight.get(blockNum)
        .then(function(data) {
            vm.blockHash = data.data.blockhash || data.data.data.blockhash;

            BlockSearchHistory.create(blockNum, vm.blockHash, new Date())
            .then(function(data){

            },function(err){

            });
            $scope.$apply();
        },
        function(error){
            var ex = error;
        });
    }
});