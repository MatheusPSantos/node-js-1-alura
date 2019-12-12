module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send();
    });

    app.get('/livros', (req, res) => {
        res.marko(require('../views/Livros/lista/Lista.marko'));
    });
}      