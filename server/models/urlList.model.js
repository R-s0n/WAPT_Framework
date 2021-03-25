const mongoose = require('mongoose');

const UrlListSchema = new mongoose.Schema({
    fqdnId: {type:String},
    subjack: [{
        type: String
    }],
    eyeWitness: [{
        type: String
    }],
    Github: [{
        type: String
    }],
    Google: [{
        type: String
    }],
    Shodan: [{
        type: String
    }],
    Censys: [{
        type: String
    }]
}, {timestamps: true});

module.exports.UrlList = mongoose.model("UrlList", UrlListSchema);