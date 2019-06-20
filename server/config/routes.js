var author = require('../controllers/controllers.js');

module.exports = function(app){
    app.get('/allAuthors', (req, res) => {
        author.index(req, res);
    })
    app.get('/getAuthor/:id', (req, res) => {
        author.show(req, res);
    })
    app.post('/create', (req, res) => {
        author.create(req, res);
    })
    app.put('/update/author/:id', (req, res) => {
        console.log("THIS IS ROUTES", req.body);
        author.update(req, res);
    })
    app.delete('/delete/:id', (req, res) => {
        author.delete(req, res);
    })
    app.put('/authorlike/:id', (req, res) => {
        author.update_like(req, res);
    })
    app.put('/togglelike/:id', (req, res) => {
        author.toggle_like(req, res);
    })
}