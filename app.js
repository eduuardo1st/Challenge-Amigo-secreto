let amigos = [];
let amigoSorteado = document.getElementById('resultado');

function adicionarAmigo()
{
    if (amigoSorteado != null)
    {
        amigoSorteado.innerHTML = '';
    }

    let amigo = document.querySelector('input').value;

    if(amigo == '')
    {
        alert('Por favor, insira um nome válido.');
    }
    else if(amigos.includes(amigo))
    {
        alert('Este amigo já foi adicionado à lista.');
    }
    else
    {
        amigos.push(amigo);
        document.querySelector('input').value = '';
        atualizarLista();
    }
}

function atualizarLista()
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item); 
    }
}

function sortearAmigo()
{
    if(amigos.length === 0)
    {
        alert('A lista de amigos está vazia. Adicione amigos para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    amigoSorteado.innerHTML = amigos[indiceAleatorio];
    limparLista();
}

function limparLista()
{
    amigos = [];
    document.querySelector('input').value = '';
    atualizarLista();
}