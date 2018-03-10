angular.module('utxoPreviewService', [])
    .factory('UtxoPreviews', function($http) {
        return {
            get : function() {
                return $http.get('/api/utxoPreviews')
                .then(function(response){
                    return response.data
                });
            },
            create : function(utxoPreviewData) {
                return $http.post('/api/utxoPreviews', utxoPreviewData)
                .then(function(response){
                    return response.data
                });
            },
            delete : function(id) {
                return $http.delete('/api/utxoPreviews/' + id)
                .then(function(response){
                    return response.data
                })
            }
        }
    });
