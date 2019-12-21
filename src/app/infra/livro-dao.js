class LivroDao {
  constructor(db) {
    this.db = db;
  }

  lista() {
    return new Promise((resolve, reject) => {
      this.db.all(
        'SELECT * FROM livros',
        (err, res) => {
          if (err)
            return reject('Error, not possible list books');
          return resolve(res);
        }
      );
    });
  }

  adicionar(livro) {
    return new Promise((resolve, reject) => {
      this.db.run(`
        INSERT INTO livros (
          titulo,
          preco,
          descricao
        ) values (?,?,?)`,
        [livro.titulo, livro.preco, livro.descricao],
        (error) => {
          if (error)
            return reject("Not inser books")
          resolve();
        }
      );
    });
  }
  buscaPorId(id) {

    return new Promise((resolve, reject) => {
      this._db.get(
        `
                SELECT *
                FROM livros
                WHERE id = ?
            `,
        [id],
        (erro, livro) => {
          if (erro) {
            return reject('Não foi possível encontrar o livro!');
          }
          return resolve(livro);
        }
      );
    });
  }

  atualiza(livro) {
    return new Promise((resolve, reject) => {
      this._db.run(`
            UPDATE livros SET
            titulo = ?,
            preco = ?,
            descricao = ?
            WHERE id = ?
        `,
        [
          livro.titulo,
          livro.preco,
          livro.descricao,
          livro.id
        ],
        erro => {
          if (erro) {
            return reject('Não foi possível atualizar o livro!');
          }

          resolve();
        });
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `DELETE FROM livros WHERE id = ?`, [id],
        (erro) => {
          if (erro) {
            return reject('Não foi possível remover o livro!');
          }
          return resolve();
        }
      );
    });
  }
}

module.exports = LivroDao;