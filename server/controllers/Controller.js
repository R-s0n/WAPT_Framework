const { Fqdn } = require("../models/fqdn.model");
const { SubdomainList } = require("../models/subdomainList.model");
const { UrlList } = require("../models/urlList.model");

module.exports.ping = (req, res) => {
    res.json({ message: "pong" });
}

module.exports.addFqdn = (req, res) => {
    Fqdn.create(req.body)
        .then(newFqdn=>res.json(newFqdn))
        .catch(err=>res.status(400).json(err))
}

module.exports.getFqdns = (req, res) => {
    Fqdn.find()
        .then(fqdns=>res.json(fqdns))
        .catch(err=>res.status(400).json(err))
}

module.exports.getFqdn = (req, res) => {
    Fqdn.findOne({ _id: req.body._id })
        .then(oneFqdn=>res.json(oneFqdn))
        .catch(err=>res.status(400).json(err))
}

module.exports.deleteFqdn = (req, res) => {
    Fqdn.deleteOne({ _id: req.body._id })
        .then(result=>res.json({success:true}))
        .catch(err=>res.status(400).json(err))
}

module.exports.updateFqdn = (req, res) => {
    Fqdn.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true, runValidators: true })
        .then(result=>res.json(result))
        .catch(err=>res.status(400).json(err))
}

// module.exports.addSubdomainList = (req, res) => {
//     SubdomainList.create(req.body)
//         .then(newSubdomainList=>res.json(newSubdomainList))
//         .catch(err=>res.status(400).json(err))
// }

// module.exports.deleteSubdomainList = (req, res) => {
//     SubdomainList.deleteOne({ fqdnId: req.body.fqdnId })
//         .then(result=>res.json({success:true}))
//         .catch(err=>res.status(400).json(err))
// }

// module.exports.getSubdomainList = (req, res) => {
//     SubdomainList.findOne({ fqdnId: req.body.fqdnId })
//         .then(newSubdomainList=>res.json(newSubdomainList))
//         .catch(err=>res.status(400).json(err))
// }

// module.exports.updateSubdomainList = (req, res) => {
//     SubdomainList.findOneAndUpdate(
//         { fqdnId: req.body.fqdnId },
//         req.body,
//         { new: true, runValidators: true })
//         .then(result=>res.json(result))
//         .catch(err=>res.status(400).json(err))
// }

// module.exports.addUrlList = (req, res) => {
//     UrlList.create(req.body)
//         .then(newUrlList=>res.json(newUrlList))
//         .catch(err=>res.status(400).json(err))
// }

// module.exports.deleteUrlList = (req, res) => {
//     UrlList.deleteOne({ fqdnId: req.body.fqdnId })
//         .then(result=>res.json({success:true}))
//         .catch(err=>res.status(400).json(err))
// }

// module.exports.getUrlList = (req, res) => {
//     UrlList.findOne({ fqdnId: req.body.fqdnId })
//         .then(newUrlList=>res.json(newUrlList))
//         .catch(err=>res.status(400).json(err))
// }

// module.exports.updateUrlList = (req, res) => {
//     UrlList.findOneAndUpdate(
//         { fqdnId: req.body.fqdnId },
//         req.body,
//         { new: true, runValidators: true })
//         .then(result=>res.json(result))
//         .catch(err=>res.status(400).json(err))
// }