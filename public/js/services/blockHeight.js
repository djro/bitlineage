var app = angular.module('blockHeightService', []);

app.factory('BlockHeight', function($http){
    return {
        get: function (blocknum){
            return $http({
                method: "GET",
                url: 'https://chain.so/api/v2/get_blockhash/btc/' + blocknum,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(function(response){
                return response.data
            })
        }
    }
});