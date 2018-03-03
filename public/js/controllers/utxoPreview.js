// js/controllers/main.js
angular.module('utxoPreviewController', [])

    // inject the UtxoPreview service factory into our controller
    .controller('utxoPreviewController', function($scope, $http, UtxoPreviews) {
        $scope.formData = {};

        // GET =====================================================================
        // when landing on the page, get all utxoPreviews and show them
        // use the service to get all the utxoPreviews
        UtxoPreviews.get()
            .success(function(data) {
                $scope.utxoPreviews = data;
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createUtxoPreview = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same to-do anymore
            if (!$.isEmptyObject($scope.formData)) {

                // call the create function from our service (returns a promise object)
                UtxoPreviews.create($scope.formData)

                    // if successful creation, call our get function to get all the new utxoPreviews
                    .success(function(data) {
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.utxoPreviews = data; // assign our new list of utxoPreviews
                    });
            }
        };

        // DELETE ==================================================================
        // delete a utxoPreview after checking it
        $scope.deleteUtxoPreview = function(id) {
            UtxoPreviews.delete(id)
                // if successful creation, call our get function to get all the new utxoPreviews
                .success(function(data) {
                    $scope.utxoPreviews = data; // assign our new list of utxoPreviews
                });
        };
    });
