angular.module('transactionLineageController', [])

    // inject the UtxoPreview service factory into our controller
    .controller('transactionLineageController', function($scope, $http, BlockChainInfo) {
        vm = this;
        vm.getRawAddress = function(address){
            BlockChainInfo.getRawAddress(address).then(function(data){
                vm.getRawAddress = data;

                var spentTxs = vm.filterSpentTxs(address, data.txs)
            })
        }


        vm.filterSpentTxs = function(parentAddr, txs){
            var txsToInclude = [];
            for(var tx of txs){
                var ammountFromAddress = 0;
                var totalInputAmmount = 0;
                for(var txInput of tx.inputs){
                    if (txInput.prev_out.addr == parentAddr){
                        ammountFromAddress += txInput.prev_out.value;
                    } 
                    totalInputAmmount += txInput.prev_out.value;
                }

                if(ammountFromAddress >0){
                    tx.percentageInputsFromParent = (ammountFromAddress / totalInputAmmount) * 100;
                    txsToInclude.push(tx);
                }
            }

            return txsToInclude;
        }

    });
