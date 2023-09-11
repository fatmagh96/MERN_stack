const productController = require('../controllers/product.controller')

module.exports = app => {
    app.get('/api/products', productController.findAllProducts)
    app.get('/api/products/:id', productController.findOneProduct)
    app.post('/api/products', productController.createProduct)
    // app.put('/api/people/:id', productController.updateProduct)
    // app.delete('/api/people/:id', productController.deleteProduct)
}