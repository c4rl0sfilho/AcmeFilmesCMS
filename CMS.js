'use strict'

console.log('dvfdsgbsdfb');

const tbl_filmes = document.getElementById('tbl_filmes')

function criarData(data){


}

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
        preco.textContent = Number(filme.valor_unitario).toFixed(2)

//ADICIONAR AS IMAGENS DAS AÇÔES

        const acoes = document.createElement('td')
        acoes.classList.add('flex', 'flex-row', 'px-16' ,'gap-4')

        const editar = document.createElement('img')
        editar.src = '../img/write-svgrepo-com 1.svg'

        const lixeira = document.createElement('img')
        lixeira.src = '../img/trash-bin-minimalistic-svgrepo-com 1.svg'

        acoes.appendChild(lixeira)
        acoes.appendChild(editar)
        tr.replaceChildren(id, nome, lancamento, preco, acoes)
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





