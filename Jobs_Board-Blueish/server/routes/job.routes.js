const jobController = require('../controllers/job.controller')

const authentificate = require('../config/jwt.config')

module.exports = app => {
    // app.get('/api/jobs' ,jobController.findAll)
    app.get('/api/jobs',authentificate ,jobController.findAll)
    // --------------------------------------
    app.get('/api/jobs/users/:userId',authentificate ,jobController.findByUserId)

    // ----------------------------------------
    // app.get('/api/jobs/:id' , jobController.findOne)
    app.get('/api/jobs/:id',authentificate , jobController.findOne)
    // app.post('/api/jobs', jobController.create)
    app.post('/api/jobs',authentificate, jobController.create)
    // app.put('/api/jobs/:id', jobController.update)
    app.put('/api/jobs/:id',authentificate, jobController.update)
    // app.delete('/api/jobs/:id', jobController.delete)
    app.delete('/api/jobs/:id',authentificate , jobController.delete)
}