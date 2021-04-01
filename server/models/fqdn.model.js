const mongoose = require('mongoose');

const FqdnSchema = new mongoose.Schema({
    fqdn: {type:String},
    recon: {
        subdomains: {
            gospider: [{
                type: String
            }],
            hakrawler: [{
                type: String
            }],
            subdomainizer: [{
                type: String
            }],
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
            shosubgo : [{
                type: String
            }],
            subfinder : [{
                type: String
            }],
            githubSearch : [{
                type: String
            }],
            amassBrute : [{
                type: String
            }],
            shuffledns : [{
                type: String
            }],
            consolidated : [{
                type: String
            }],
            consolidatedNew : [{
                type: String
            }],
            httprobe : [{
                type: String
            }],
            httprobeAdded : [{
                type: String
            }],
            httprobeRemoved : [{
                type: String
            }],
            masscan : [{
                ip: String,
                timestamp: String,
                ports: [{
                    port: Number,
                    proto: String,
                    status: String,
                    reason: String,
                    ttl: Number
                }]
            }],
            masscanAdded : [{
                type: String
            }],
            masscanRemoved : [{
                type: String
            }]
        },
        notableUrls: {
            eyeWitness: [{
                type: String
            }]
        },
        subdomainTakeover: {
            subjack: [{
                type: String
            }]
        },
        osint: {
            notableRepos: [{
                type: String
            }],
            GithubSearch: [{
                payload: String,
                results: Number,
                url: String
            }],
            GithubUsers: [{
                username: String,
                githubUrl: String
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
        }
    },
    loot: {
        highEntrophy: [{
            type: String
        }]
    }
}, {timestamps: true});

module.exports.Fqdn = mongoose.model("Fqdn", FqdnSchema);