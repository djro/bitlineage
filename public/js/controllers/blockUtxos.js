angular.module('blockUtxosController', [])

.controller('blockUtxosController', function($scope, $http, BlockHeight){
    this.getBlockFromNumber = function(blockNum){
        vm = this;
        BlockHeight.get(blockNum)
        .then(function(data) {
            vm.blockHash = data.data.blockhash || data.data.data.blockhash;
            $scope.$apply();
        },
        function(error){
            var ex = error;
        });
    }
});