let pratoEscolhido;
let bebidaEscolhida;
let sobremesaEscolhida;
let ComidaFinal;
let BebidaFinal;
let SobremesaFinal;
let PreçoFinal;
let Nome;
let Endereço;

function SelecionarPrato(escolha) {

    const pratoSelecionado = document.querySelector ('.caixa-prato .selecionado');
    const button = escolha.querySelector ('.botão')

    if (pratoSelecionado !== null){
    pratoSelecionado.classList.remove('selecionado');
    }

    escolha.classList.add('selecionado');
    button.classList.add('apareceBotão');

    pratoEscolhido = escolha;
    
    ConcluirPedido();
}

function SelecionarBebida(escolha) {

    const bebidaSelecionada = document.querySelector ('.caixa-bebida .selecionado');
    const button = escolha.querySelector ('.botão')
    
    if (bebidaSelecionada !== null){
    bebidaSelecionada.classList.remove('selecionado');
    }

    escolha.classList.add('selecionado');
    button.classList.add('apareceBotão');

    bebidaEscolhida = escolha;

    ConcluirPedido();
}

function SelecionarSobremesa(escolha) {

    const sobremesaSelecionada = document.querySelector ('.caixa-sobremesa .selecionado');
    const button = escolha.querySelector ('.botão')

    if (sobremesaSelecionada !== null){
    sobremesaSelecionada.classList.remove('selecionado');
    }

    escolha.classList.add('selecionado');
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

Nome = prompt('Qual seu nome?');
Endereço = prompt('Qual seu endereço?')
}

function Whatsapp (){

let Mensagem = encodeURIComponent (`Olá, gostaria de fazer o pedido:
- Prato: ${ComidaFinal}
- Bebida: ${BebidaFinal}
- Sobremesa: ${SobremesaFinal}
Total: R$ ${PreçoFinal}\n
Nome: ${Nome}
Endereço: ${Endereço}`);

window.open(`https://api.whatsapp.com/send?phone=5522992323533&text=${Mensagem}`);

console.log(Mensagem);
}

