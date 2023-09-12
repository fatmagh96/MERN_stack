const noteController = require('../controllers/note.controller')


module.exports = app => {
    app.get('/api/notes', noteController.findAll)
    app.get('/api/notes/:id', noteController.findById)
    app.post('/api/notes', noteController.createOne)
    app.put('/api/notes/:id', noteController.update)
    app.delete('/api/notes/:id', noteController.delete)
}
