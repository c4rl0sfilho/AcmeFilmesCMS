const tbl_filmes = document.getElementById('tbl_filmes')


async function criarLinhaFilme() {
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        console.log(filme.nome)

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
        
        const date = new Date(isoString)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        lancamento.textContent = `${day}/${month}/${year}`

        const preco = document.createElement('td')
        preco.classList.add('text-blue-500', 'px-16')
        preco.textContent = Number(filme.valor_unitario).toFixed(2)

        const acoes = document.createElement('td')
        acoes.classList.add('flex', 'flex-row', 'px-16' ,'gap-4')

        const editar = document.createElement('img')
        editar.src = '../img/write-svgrepo-com 1.svg'

        const lixeira = document.createElement('img')
        lixeira.src = '../img/trash-bin-minimalistic-svgrepo-com 1.svg'
        lixeira.classList.add('cursor-pointer')
        lixeira.addEventListener('click', () => deleteFilme(filme.id, tr))


        acoes.appendChild(editar)
        acoes.appendChild(lixeira)
        tr.append(id, nome, lancamento, preco, acoes)
        tbl_filmes.appendChild(tr)
    })
}

async function getFilmes() {
    const url = 'http://localhost:8080/v2/acmeFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
}

async function deleteFilme(id) {
    try {
        await fetch(`http://localhost:8080/v2/acmeFilmes/filme/${id}`,{
            method: 'DELETE'
        })
        console.log("Item deletado");
    } catch (error) {
        console.error(error);
    }
}





criarLinhaFilme()