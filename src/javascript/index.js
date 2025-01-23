const btnGerarNovoConselho = document.getElementById('btn-gerar-conselho')
const novoConselho = document.getElementById('novo-conselho')
const advice = document.getElementById('conselho')


async function gerarNovoConselho(){
    try{
        const url = "https://api.adviceslip.com/advice";
        const resposta = await fetch(url)
        let mensagemConselho = await resposta.json()

        advice.innerText = `Advice #${mensagemConselho.slip.id}`
        novoConselho.innerText = mensagemConselho.slip.advice

    }catch(Error){
        advice.innerText = `Advice Error!` 
        novoConselho.innerText = `Erro ao gerar novo conselho :(`
    }
}

btnGerarNovoConselho.addEventListener('click', gerarNovoConselho);

gerarNovoConselho();
   