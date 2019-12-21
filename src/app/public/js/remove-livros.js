let tabelaLivros = document.querySelector("#livros");
tabelaLivros.addEventListener("click", (event) => {
    let elementoClicado = event.target;
    console.log(elementoClicado);
    if(elementoClicado.dataset.type == 'remocao') {
        let livroId = elementoClicado.dataset.ref;
        fetch('http://localhost:3000/livros/${livroId}', { method: "DELET" }).then( resp => {
            let tr = elementoClicado.closest('#livro_${livroId}');
            tr.remove();
        }).catch(err => console.log(err));
    }
})