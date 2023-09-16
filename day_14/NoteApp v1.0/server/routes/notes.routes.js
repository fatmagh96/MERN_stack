const noteController = require('../controllers/note.controller')

const authentificate = require('../config/jwt.config')

module.exports = app => {
    app.get('/api/notes', authentificate ,noteController.findAll)
    app.get('/api/notes/:id',authentificate , noteController.findOne)
    app.post('/api/notes',authentificate , noteController.create)
    app.put('/api/notes/:id',authentificate , noteController.update)
    app.delete('/api/notes/:id',authentificate , noteController.delete)
}