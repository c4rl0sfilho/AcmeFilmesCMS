' use strict'

const tbl_generos = document.getElementById('tbl_generos')


async function getGenero() {
    const url = 'http://localhost:8080/v2/acmeFilmes/generos'
    const response = await fetch(url)
    const data = await response.json()
    return data.generos
}

async function criarLinhaGenero(){
    const generos = await getGenero()

    generos.forEach(generos => {
        console.log(generos.nome)


    const tr = document.createElement('tr')

        const id = document.createElement('td')
        id.classList.add('text-blue-500', 'px-16')
        id.textContent = generos.id

        const nome = document.createElement('td')
        nome.classList.add('px-16')
        nome.textContent = generos.nome

        const acoes = document.createElement('td')
        acoes.classList.add('flex', 'flex-row', 'px-16' ,'gap-4')

        const editar = document.createElement('img')
        editar.src = '../img/write-svgrepo-com 1.svg'
        editar.addEventListener('click', function(){

            const body = document.getElementById('body')
            body.innerHTML  = `
            <div class="updateGenero  flex flex-col w-96 h-3/4 bg-[#c0c0c0] justify-center items-center "> 
            <h2 class="text-[#5C2786] font-bold">Atualizar Gênero</h2>
               
               <form class="flex flex-col items-center pt-12">
                 <label for="nome">Nome do Gênero*:</label><br>
                 <input type="text" id="nome" name="nome"><br>
               
                 <button class="flex w-32 h-8 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#5C2786] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" id="botao-atualizar">Enviar</button>
               
               </form>
               
            
            </div>
            `
            const botaoAtualizar = document.getElementById('botao-atualizar')
            botaoAtualizar.addEventListener('click', )
            generos.id
        })

        const lixeira = document.createElement('img')
        lixeira.src = '../img/trash-bin-minimalistic-svgrepo-com 1.svg'
        lixeira.classList.add('cursor-pointer')
        lixeira.addEventListener('click', () => deleteGenero(generos.id, tr))

        acoes.appendChild(editar)
        acoes.appendChild(lixeira)
        tr.append(id, nome, acoes)
        tbl_generos.appendChild(tr)
    })
}

 async function putGenero(id, generos){
    const url = `http://localhost:8080/v2/acmeFilmes/genero/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(generos)
    }
    const response = await fetch(url, options)
    return response.ok
}

async function insertGenero(){

    const nomeGenero = document.getElementById('nome').value

    const generoJSON = {}

    generoJSON.nome = nomeGenero

    const url = 'http://localhost:8080/v2/acmeFilmes/genero'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(generoJSON)
    }
    const response = await fetch(url, options)
    return response.ok 

}

const botaoEnviar = document.getElementById('botao-enviar')
botaoEnviar.addEventListener('click', function(response){
    insertGenero()

    if (response) {
        alert('Certo')
    }else
        alert('erradooo')
})


async function deleteGenero(id) {
    try {
        await fetch(`http://localhost:8080/v2/acmeFilmes/genero/${id}`,{
            method: 'DELETE'
        })
        alert("Item deletado");
        location.reload()
    } catch (error) {
        console.error(error);
    }
}

criarLinhaGenero()