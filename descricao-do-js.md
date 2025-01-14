::::: Explicando o Código :::::

1- Primeiro lá no HTML, onde era uma div com o ícone do gerador de conselhos, mudei para uma tag <button></button>.
Em seguida adicionei um id chamado "btn-gerar-conselho" para ser buscado no meu JavaScript.
```html
    <button class="icone" id="btn-gerar-conselho">
        <img src="src/images/icon-dice.svg" alt="Ícone do gerador de conselhos">
    </button>
```

2- Em seguida busquei o Endpoint do API do Gerador de Conselhos com o fetch na função 'gerarNovoConselho()'.
```js
async function gerarNovoConselho()
```

Daí chamando meu texto da tag <p> com o id "novoConselho", alterei o texto com o conselho atual buscando isso
navegando dentro do json através do console.log: 'mensagemConselho.slip.advice'.

3- Depois fiz o mesmo para alterar o id do título "Advice" na função 'idAleatorioConselho()' também navegando dentro do console.log: 'idDoConselho.slip.id'.
```js
async function idAleatorioConselho()
```

4- Coloquei ambas as funções dentro do try e do catch para fazer os tratamentos de erros.

5- Para atualizar os conselhos sem denpender de atualizar no navegador, adicionei um evento no botão com id "btnGerarNovoConselho" que
aciona as duas funções anteriores criadas 'gerarNovoConselho()' e 'idAleatorioConselho()'.
```js
btnGerarNovoConselho.addEventListener('click', ()=>{
    gerarNovoConselho()
    idAleatorioConselho()
})
```