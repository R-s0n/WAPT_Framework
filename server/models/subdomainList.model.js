const mongoose = require('mongoose');

const SubdomainListSchema = new mongoose.Schema({
    fqdnId: {type:String},
    sublist3r: [{
        type: String
    }],
    amass: [{
        type: String
    }],
    assetfinder: [{
        type: String
    }],
    gau : [{
        type: String
    }],
    ctl : [{
        type: String
    }],
    consolidated : [{
        type: String
    }],
    httprobe : [{
        type: String
    }]
}, {timestamps: true});

module.exports.SubdomainList = mongoose.model("SubdomainList", SubdomainListSchema);