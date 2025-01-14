const btnGerarNovoConselho = document.getElementById('btn-gerar-conselho')
const novoConselho = document.getElementById('novo-conselho')
const conselhoDaVez = document.getElementById('conselho')


async function gerarNovoConselho(){
    try{
        const url = "https://api.adviceslip.com/advice";
        const resposta = await fetch(url)
        let mensagemConselho = await resposta.json()
        novoConselho.innerText = mensagemConselho.slip.advice
    }catch(Error){
        novoConselho.innerText = `Erro ao gerar novo conselho :(`
    }
}

async function idAleatorioConselho() {
    try{
        await gerarNovoConselho()
        const url = "https://api.adviceslip.com/advice";
        const resposta = await fetch(url)
        let idDoConselho = await resposta.json()
        conselhoDaVez.innerText = `Advice ${idDoConselho.slip.id}` 
    }catch(Error){
        conselhoDaVez.innerText = `Advice Error` 
    } 
}

idAleatorioConselho()

btnGerarNovoConselho.addEventListener('click', ()=>{
    gerarNovoConselho()
    idAleatorioConselho()
})