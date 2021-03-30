const { Fqdn } = require("../models/fqdn.model");


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

module.exports.autoGetFqdn = (req, res) => {
    Fqdn.findOne({ fqdn: req.body.fqdn })
        .then(oneFqdn=>res.json(oneFqdn))
        .catch(err=>res.status(400).json(err))
}

module.exports.autoUpdateFqdn = (req, res) => {
    Fqdn.findOneAndUpdate(
        { fqdn: req.body.fqdn },
        req.body,
        { new: true, runValidators: true })
        .then(result=>res.json(result))
        .catch(err=>res.status(400).json(err))
}