function SelecionarPrato() {
    const PratoSelecionado = document.querySelector('.pedido-prato');
    PratoSelecionado.classList.add('selecionado');

    const Button = document.querySelector('.botão');
    Button.classList.add ('botãoAparece');
}