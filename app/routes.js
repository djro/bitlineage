// load the utxoPreview model
var UtxoPreview = require('./models/utxoPreview');

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

    //outside api
    app.get('/api/block')

}