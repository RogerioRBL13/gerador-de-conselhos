::::: Explicando o Código :::::

1- Primeiro lá no HTML, onde era uma div com o ícone do gerador de conselhos, mudei para uma tag <button></button>.
Em seguida adicionei um id chamado "btn-gerar-conselho" para ser buscado no meu JavaScript.
```html
    <button class="icone" id="btn-gerar-conselho">
        <img src="src/images/icon-dice.svg" alt="Ícone do gerador de conselhos">
    </button>
```

2- Em seguida busquei o Endpoint do API do Gerador de Conselhos com o fetch na função 'gerarNovoConselho()' para que trabalhemos na alteração dos textos HTML "ADVICE" e dos novos "CONSELHOS".
```js
async function gerarNovoConselho()
```

3- Daí chamando meu texto da tag <h6> com o id "conselho", alterei o texto com o o número do id buscando isso
navegando dentro do json através do console.log: 'mensagemConselho.slip.id'.

Depois fiz o mesmo para alterar o texto na tag <p> onde se atualiza o conselho chamando pelo id "novoConselho", também navegando dentro do console.log: 'idDoConselho.slip.advice'.

Tudo isso deu para simplificar numa única função já citada acima, gerarNovoConselho().

4- Coloquei a função dentro do try e do catch para fazer os tratamentos de erros.

5- Para atualizar os conselhos sem denpender de atualizar no navegador, adicionei um evento no botão com id "btnGerarNovoConselho" que
aciona a função 'gerarNovoConselho()'. Deixei a função sendo chamada por último.

```js
btnGerarNovoConselho.addEventListener('click', gerarNovoConselho);

gerarNovoConselho();
```
