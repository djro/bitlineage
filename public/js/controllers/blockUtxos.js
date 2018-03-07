angular.module('blockUtxosController', [])

.controller('blockUtxosController', function($scope, $http, BlockHeight){
    this.getBlockFromNumber = function(blockNum){
        BlockHeight.get(blockNum)
        .success(function(data) {
            
        });
    }
});