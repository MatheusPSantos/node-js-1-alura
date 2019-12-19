const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send();
    });

    app.get('/livros', (req, resp) => {
        const livroDao = new LivroDao(db);
        livroDao.lista()
                .then(livros => resp.marko(require('../views/Livros/lista/Lista.marko'), { livros: livros }))
                .catch(error => console.log(error))
    }); 
};