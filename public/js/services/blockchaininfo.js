var app = angular.module('blockchaininfoService', []);

app.factory('BlockChainInfo', function($http){
    return {
        getBlockByHash: function (hash){
//'https://blockchain.info/rawaddr/1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F';
//'https://blockchain.info/rawblock/000000000000000002cce816c0ab2c5c269cb081896b7dcb34b8422d6b74ffa1;
            var address = 'https://blockchain.info/rawblock/' + hash;
            return $http({
                method: "GET",
                url: address,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            })
        }
    }
});