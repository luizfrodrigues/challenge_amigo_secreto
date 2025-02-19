//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Crie um array para armazenar os nomes
let amigos = [];

//Implementa uma função para agregar amigos

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const inputAmigo = document.querySelector('#amigo');
    const nomeAmigo = inputAmigo.value.trim();
  
    // Validar a entrada
    if (nomeAmigo === '') {
      alert('Por favor, insira um nome.');
      return;
    }
  
    // Atualizar o array de amigos
    amigos.push(nomeAmigo);
    console.log(`Nome adicionado: ${nomeAmigo}`);
  
    // Limpar o campo de entrada
    inputAmigo.value = '';

    console.log(`Array de nomes: [${amigos}]`);

    // Atualizar a lista de amigos na tela
    atualizarListaAmigos();
}

// Implementa uma função para atualizar a lista de amigos

function atualizarListaAmigos() {
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
  
    for (let i = 0; i < amigos.length; i++) {
      const amigo = amigos[i];
      const itemLista = document.createElement('li');
      itemLista.textContent = amigo;
      lista.appendChild(itemLista);
    }
}

// Implementa uma função para sortear os amigos

function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
      alert('Não há amigos disponíveis para sortear!');
      return;
    }
  
    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
