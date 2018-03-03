
    // load mongoose since we need it to define a model
    var mongoose = require('mongoose');

    module.exports = mongoose.model('UtxoPreview', {
        address : String,
        parentAddress : String,
        block: Number,
        amount: Number
    });

