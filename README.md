# Challenge amigo secreto

## Formação Iniciante em Programação G8 - ONE

**Um projeto de Amigo Secreto desenvolvido em HTML, CSS e JavaScript.**
## Funcionalidades

1. **Adicionar Participantes**:
   - Insira o nome de cada participante no campo de texto e clique em "Adicionar".
   - O nome será validado para garantir que tenha mais de 3 caracteres e não seja repetido.

2. **Lista de Participantes**:
   - Todos os nomes adicionados são exibidos em uma lista abaixo do campo de entrada.

3. **Sortear**:
   - Quando houver pelo menos 4 participantes, o botão "Sortear" ficará disponível.
   - Clique nele para embaralhar os nomes e gerar os pares do Amigo Secreto.

4. **Reiniciar**:
   - Use o botão "Reiniciar" para limpar a lista de participantes e os resultados, permitindo um novo sorteio.

## Implementações

- Utilização de array para armazenar nomes de amigos
- Função para adicionar amigos à lista
- Função para sortear amigo secreto aleatoriamente
- Função para exibir lista de amigos e amigo sorteado
- Utilização de Math.random() e Math.floor() para gerar índice aleatório

## Estrutura do Projeto

- `index.html`: Estrutura da página.
- `styles.css`: Estilos CSS para o layout.
- `app.js`: Lógica do jogo em JavaScript
