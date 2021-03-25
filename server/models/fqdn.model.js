const mongoose = require('mongoose');

const FqdnSchema = new mongoose.Schema({
    fqdn: {type:String},
}, {timestamps: true});

module.exports.Fqdn = mongoose.model("Fqdn", FqdnSchema);