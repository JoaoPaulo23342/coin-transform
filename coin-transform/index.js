// capturando os elementos do formulario
const input = document.querySelector('#amount');
const coins = document.querySelector('#currency')
const form = document.querySelector('form');

// manipulando o input do id "amount" para receber somente números
input.addEventListener('input', (ev) => {
    const regex = /\D+/g;
    input.value = input.value.replace(regex, "");
    

} )
// capturando o submit do formulário
form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    console.log(coins.value)

})