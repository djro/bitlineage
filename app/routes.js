// load models
var UtxoPreview = require('./models/utxoPreview');
var BlockSearchHistory = require('./models/blockSearchHistory');
var Client = require('node-rest-client').Client;
// expose the routes to our express.app with module.exports
module.exports = function(app) {
    // api ---------------------------------------------------------------------
    // get all utxoPreviews
    app.get('/api/utxoPreviews', function(req, res) {
        // use mongoose to get all utxoPreviews in the database
        UtxoPreview.find(function(err, utxoPreviews) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(utxoPreviews); // return all utxoPreviews in JSON format
        });
    });

    // create utxoPreview and send back all utxoPreviews after creation
    app.post('/api/utxoPreviews', function(req, res) {
        //create a utxoPreview, information comes from AJAX request from Angular
        UtxoPreview.create({
            address: req.body.address,
            parrentAddress: req.body.parrentAddress,
            block : req.body.block,
            amount: req.body.number 
        }, function(err, utxoPreview) {
            if (err)
                res.send(err);
            // get and return all the utxoPreviews after you create another
            UtxoPreview.find(function(err, utxoPreviews) {
                if (err)
                    res.send(err)
                res.json(utxoPreviews);
            });
        });

    });

    // delete a utxoPreview
    app.delete('/api/utxoPreviews/:utxoPreview_id', function(req, res) {
        UtxoPreview.remove({
            _id : req.params.utxoPreview_id
        }, function(err, utxoPreview) {
            if (err)
                res.send(err);
            // get and return all the utxoPreviews after you create another
            UtxoPreview.find(function(err, utxoPreviews) {
                if (err)
                    res.send(err)
                res.json(utxoPreviews);
            });
        });
    });

    //---------block search--------------------------------------------
    //get
    app.get('/api/blockSearchHistory', function(req, res) {
        BlockSearchHistory.find(function(err, blockSearchHistory) {
            if (err)
                res.send(err)
            //return data
            res.json(blockSearchHistory); 
        });
    });
    //post
    app.post('/api/blockSearchHistory', function(req, res) {
        BlockSearchHistory.create({
            blockNum: req.body.blockNum,
            hash: req.body.hash,
            dateSearched: req.body.dateSearched
        }, function(err, blockSearchHistory) {
            if (err)
                res.send(err);

            BlockSearchHistory.find(function(err, blockSearchHistory) {
                if (err)
                    res.send(err)
                //return data    
                res.json(blockSearchHistory);
            });
        });

    });
    // delete
    app.delete('/api/blockSearchHistory/:blockSearchHistory_id', function(req, res) {
        BlockSearchHistory.remove({
            _id : req.params.blockSearchHistory_id
        }, function(err, blockSearchHistory) {
            if (err)
                res.send(err);

            BlockSearchHistory.find(function(err, BlockSearchHistory) {
                if (err)
                    res.send(err)
                //return data
                res.json(blockSearchHistory);
            });
        });
    });
    //---------end block search---------------------------

    //---------blockchaininfo webpi ----------------------
        //get
        app.get('/api/blockchaininfo/:hash', function(req, res) {

            var client = new Client();
            var args = {
                path: { hash: req.params.hash }, // path substitution var  
                headers: { 'Content-Type': 'application/json; charset=utf-8' } // request headers 
            };

            client.get("https://blockchain.info/rawblock/${hash}", args,
            function (data, response) {

                console.log(data);
                res.json(data); 
            });
        });
    //---------end blockchaininfo webpi ----------------------
    
}