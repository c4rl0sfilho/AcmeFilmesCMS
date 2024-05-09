'use strict'

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
        let isoString = filme.data_lancamento
        
        // Cria um objeto Date a partir da string ISO
        const date = new Date(isoString);

        // Extrai o dia, o mês e o ano
        const day = String(date.getDate()).padStart(2, '0'); // Pad para garantir 2 dígitos
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses vão de 0 a 11
        const year = date.getFullYear();

        // Formata para dd/mm/yyyy
        lancamento.textContent = `${day}/${month}/${year}`

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





