var app = angular.module('blockchaininfoService', []);

app.factory('BlockChainInfo', function($http){
    return {
        getBlockByHash: function (hash){
            //hash='000000000000000002cce816c0ab2c5c269cb081896b7dcb34b8422d6b74ffa1';
            return $http.get('/api/blockchaininfo/' + hash);
        }
    }
});