const Controller = require('../controllers/Controller');

module.exports = function(app){
    app.get('/api/ping', Controller.ping);
    app.post('/api/fqdn', Controller.getFqdn);
    app.post('/api/fqdn/all', Controller.getFqdns);
    app.post('/api/fqdn/new', Controller.addFqdn);
    app.post('/api/fqdn/delete', Controller.deleteFqdn);
    app.post('/api/fqdn/update', Controller.updateFqdn);
    app.post('/api/auto', Controller.autoGetFqdn);
    app.post('/api/auto/update', Controller.autoUpdateFqdn);
}