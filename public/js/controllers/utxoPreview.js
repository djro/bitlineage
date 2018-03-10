angular.module('utxoPreviewController', [])

    // inject the UtxoPreview service factory into our controller
    .controller('utxoPreviewController', function($scope, $http, UtxoPreviews) {
        $scope.formData = {};

        // GET =====================================================================
        UtxoPreviews.get()
            .then(function(data) {
                $scope.utxoPreviews = data;
            });

        // CREATE ==================================================================
        $scope.createUtxoPreview = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same to-do anymore
            if (Object.keys($scope.formData).length) {
                UtxoPreviews.create($scope.formData)
                    .then(function(data) {
                        $scope.formData = {}; // clear the form 
                        $scope.utxoPreviews = data; // assign our new list of utxoPreviews
                    });
            }
        };

        // DELETE =====================================
        $scope.deleteUtxoPreview = function(id) {
            UtxoPreviews.delete(id)
                // if successful creation, call our get function to get all the new utxoPreviews
                .success(function(data) {
                    $scope.utxoPreviews = data; // assign our new list of utxoPreviews
                });
        };
    });
