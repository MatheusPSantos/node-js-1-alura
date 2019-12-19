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
}

module.exports = LivroDao;