angular.module('blockSearchHistoryService', [])
    .factory('BlockSearchHistory', function($http) {
        return {
            get : function() {
                return $http.get('/api/blockSearchHistory');
            },
            create : function(blockNum, hash, date) {

                var blockSearchHistoryData = {
                    blockNum : blockNum, 
                    hash: hash,
                    dateSearched: date
                }
                return $http.post('/api/blockSearchHistory', blockSearchHistoryData);
            },
            delete : function(id) {
                return $http.delete('/api/blockSearchHistory/' + id);
            }
        }
    });
