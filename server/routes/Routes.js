const Controller = require('../controllers/Controller');

module.exports = function(app){
    app.get('/api/ping', Controller.ping);
    app.post('/api/fqdn', Controller.getFqdn);
    app.post('/api/fqdn/all', Controller.getFqdns);
    app.post('/api/fqdn/new', Controller.addFqdn);
    app.post('/api/fqdn/delete', Controller.deleteFqdn);
    app.post('/api/fqdn/update', Controller.updateFqdn);
    // app.post('/api/subdomainlist/new', Controller.addSubdomainList);
    // app.post('/api/subdomainlist/delete', Controller.deleteSubdomainList);
    // app.post('/api/subdomainlist', Controller.getSubdomainList);
    // app.post('/api/subdomainlist/update', Controller.updateSubdomainList);
    // app.post('/api/urllist/new', Controller.addUrlList);
    // app.post('/api/urllist/delete', Controller.deleteUrlList);
    // app.post('/api/urllist', Controller.getUrlList);
    // app.post('/api/urllist/update', Controller.updateUrlList);
}