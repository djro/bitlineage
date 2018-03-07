var app = angular.module('blockHeightService', []);

app.factory('BlockHeight', function($http){
    return {
        get: function (blocknum){
            return $http({
                method: "GET",
                url: 'https://todo/api/v2/etc',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
        }
    }
            )
        }
    }
});