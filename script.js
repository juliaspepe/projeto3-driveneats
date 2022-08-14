let pratoEscolhido;
let bebidaEscolhida;
let sobremesaEscolhida;
let ComidaFinal;
let BebidaFinal;
let SobremesaFinal;
let PreçoFinal;


function SelecionarPrato(escolha) {

    // acessar a div com a classe -caixa- e -selecionado- 
    const pratoSelecionado = document.querySelector ('.caixa-prato .selecionado');
    //na div onde tem o parâmetro -escolha-, selecionar a classe -botão-
    const button = escolha.querySelector ('.botão')
    
    // se a div na classe -caixa- e -selecionado- for diferente de null
    if (pratoSelecionado !== null){
    // acessar a div e remover a classe -selecionado-
    pratoSelecionado.classList.remove('selecionado');
    }

    // acessar a div onde tem o parâmetro -escolha- e adicionar a classe -selecionado- para altera cor
    escolha.classList.add('selecionado');
    // acessar a div onde tem a variável -button- e adicionar a classe -apareceBotão- para alterar a opacidade
    button.classList.add('apareceBotão');

    pratoEscolhido = escolha;
    
    ConcluirPedido();

}

function SelecionarBebida(escolha) {

    // acessar a div com a classe -caixa- e -selecionado- 
    const bebidaSelecionada = document.querySelector ('.caixa-bebida .selecionado');
    //na div onde tem o parâmetro -escolha-, selecionar a classe -botão-
    const button = escolha.querySelector ('.botão')
    
    // se a div na classe -caixa- e -selecionado- for diferente de null
    if (bebidaSelecionada !== null){
    // acessar a div e remover a classe -selecionado-
    bebidaSelecionada.classList.remove('selecionado');
    }

    // acessar a div onde tem o parâmetro -escolha- e adicionar a classe -selecionado- para altera cor
    escolha.classList.add('selecionado');
    // acessar a div onde tem a variável -button- e adicionar a classe -apareceBotão- para alterar a opacidade
    button.classList.add('apareceBotão');

    bebidaEscolhida = escolha;

    ConcluirPedido();

}

function SelecionarSobremesa(escolha) {

    // acessar a div com a classe -caixa- e -selecionado- 
    const sobremesaSelecionada = document.querySelector ('.caixa-sobremesa .selecionado');
    //na div onde tem o parâmetro -escolha-, selecionar a classe -botão-
    const button = escolha.querySelector ('.botão')

    // se a div na classe -caixa- e -selecionado- for diferente de null
    if (sobremesaSelecionada !== null){
    // acessar a div e remover a classe -selecionado-
    sobremesaSelecionada.classList.remove('selecionado');
    }

    // acessar a div onde tem o parâmetro -escolha- e adicionar a classe -selecionado- para altera cor
    escolha.classList.add('selecionado');
    // acessar a div onde tem a variável -button- e adicionar a classe -apareceBotão- para alterar a opacidade
    button.classList.add('apareceBotão');

    sobremesaEscolhida = escolha;

    ConcluirPedido();

}

function ConcluirPedido() {
    if (pratoEscolhido !== undefined && bebidaEscolhida !== undefined && sobremesaEscolhida !== undefined) {
        const pedidoFinalizado = document.querySelector('.seletor');
        pedidoFinalizado.innerHTML = "Fechar pedido";
        pedidoFinalizado.classList.add('mudarFundo');
    } 
// quando o prato for selecionado && bebida for selecionada && sobremesa for selecionada
// liberar o botão continuar com a mensagem "Fechar pedido" e a cor do background verde
}

function Pedido() {
 ComidaFinal = document.querySelector ('.caixa-prato .selecionado h3');
 ComidaFinal = ComidaFinal.innerHTML;
 
 BebidaFinal = document.querySelector ('.caixa-bebida .selecionado h3');
 BebidaFinal = BebidaFinal.innerHTML;

 SobremesaFinal = document.querySelector ('.caixa-sobremesa .selecionado h3');
 SobremesaFinal = SobremesaFinal.innerHTML;
 
 let ValorComidaFinal = document.querySelector ('.caixa-prato .selecionado p .valor');
 ValorComidaFinal = ValorComidaFinal.innerHTML;
 ValorComidaFinal = ValorComidaFinal.replace(",", ".");

 let ValorBebidaFinal = document.querySelector ('.caixa-bebida .selecionado p .valor');
 ValorBebidaFinal = ValorBebidaFinal.innerHTML;
 ValorBebidaFinal = ValorBebidaFinal.replace(",", ".");

 let ValorSobremesaFinal = document.querySelector ('.caixa-sobremesa .selecionado p .valor');
 ValorSobremesaFinal = ValorSobremesaFinal.innerHTML;
 ValorSobremesaFinal = ValorSobremesaFinal.replace(",", ".");

 PreçoFinal = parseFloat(ValorComidaFinal) + parseFloat(ValorBebidaFinal) + parseFloat(ValorSobremesaFinal);
 PreçoFinal = PreçoFinal.toFixed(2);
}

function Whatsapp (){

let Mensagem = encodeURIComponent (`Olá, gostaria de fazer o pedido:
- Prato: ${ComidaFinal}
- Bebida: ${BebidaFinal}
- Sobremesa: ${SobremesaFinal}
Total: R$ ${PreçoFinal}`);

window.open(`https://api.whatsapp.com/send?phone=5522992323533&text=${Mensagem}`);

console.log(Mensagem);

}

