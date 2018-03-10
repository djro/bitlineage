angular.module('blockSearchHistoryService', [])
    .factory('BlockSearchHistory', function($http) {
        return {
            get : function() {
                return $http.get('/api/blockSearchHistory')
                .then(function(response){
                    return response.data
                })
            },
            create : function(blockNum, hash, date) {
                var blockSearchHistoryData = {
                    blockNum : blockNum, 
                    hash: hash,
                    dateSearched: date
                }
                return $http.post('/api/blockSearchHistory', blockSearchHistoryData)
                .then(function(response){
                    return response.data
                })
            },
            delete : function(id) {
                return $http.delete('/api/blockSearchHistory/' + id)
                .then(function(response){
                    return response.data
                })
            }
        }
    });
