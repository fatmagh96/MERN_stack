const noteController = require('../controllers/note.controller')

module.exports = app => {
    app.get('/api/notes', noteController.findAll)
    app.get('/api/notes/:id', noteController.findOne)
    app.post('/api/notes', noteController.create)
    app.put('/api/notes/:id', noteController.update)
    app.delete('/api/notes/:id', noteController.delete)
}