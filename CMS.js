'use strict'

console.log('dvfdsgbsdfb');

const tbl_filmes = document.getElementById('tbl_filmes')

async function criarLinhaFilme() {

    const filmes = await getFilmes()

    filmes.forEach(filme => {

        console.log(filme.nome);

        const tr = document.createElement('tr')

        const id = document.createElement('td')
        id.classList.add('text-blue-500', 'px-16')
        id.textContent = filme.id

        const nome = document.createElement('td')
        nome.classList.add('px-16')
        nome.textContent = filme.nome

        const lancamento = document.createElement('td')
        lancamento.classList.add('text-blue-500', 'px-16')
        lancamento.textContent = filme.data_lancamento

        const preco = document.createElement('td')
        preco.classList.add('text-blue-500', 'px-16')
        preco.textContent = filme.valor_unitario

//ADICIONAR AS IMAGENS DAS AÇÔES

        // const acoes = document.createElement('td')
        // acoes.classList.add('text-blue-500', 'px-16')
        // acoes.src = 

        tr.replaceChildren(id, nome, lancamento, preco)
        tbl_filmes.appendChild(tr)
        
    });
}

async function getFilmes(){
    const url = 'http://localhost:8080/v2/acmeFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()

    return data.filmes 
}

criarLinhaFilme()





