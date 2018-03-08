angular.module('utxoPreviewService', [])
    .factory('UtxoPreviews', function($http) {
        return {
            get : function() {
                return $http.get('/api/utxoPreviews');
            },
            create : function(utxoPreviewData) {
                return $http.post('/api/utxoPreviews', utxoPreviewData);
            },
            delete : function(id) {
                return $http.delete('/api/utxoPreviews/' + id);
            }
        }
    });
