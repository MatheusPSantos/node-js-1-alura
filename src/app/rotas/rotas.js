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

    app.get('/livros/form', (req, res) => {
        res.marko(require('../views/Livros/Form/Form.marko'), { livro: "" });
    });

    app.get('/livros/form/:id', (req, res) => {
        const id = req.params.id;
        const livroDao = new LivroDao(db);
        livroDao.buscaPorId(id).then(livro => {
            res.marko(require('../views/Livros/Form/Form.marko'), { livro: livro });
        }).catch(err => console.log(err));
    });

    app.post('/livros', (req, res) => {
        const livroDao = new LivroDao(db);
        livroDao.adicionar(req.body)
            .then(res.redirect("/livros"))
            .catch(error => console.log(error))
    });

    app.put('/livros', (req, res) => {
        const livroDao = new LivroDao(db);
        livroDao.atualiza(req.body)
            .then(res.redirect("/livros"))
            .catch(error => console.log(error))
    });

    app.delete('/livros/:id', (req, res) => {
        const id = req.params.id;
        const livroDao = new LivroDao(db);
        livroDao.remove(id).then(() => resp.status(200).end()).catch(err => console.log(err));
    });
};