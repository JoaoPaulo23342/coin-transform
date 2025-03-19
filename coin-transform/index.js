// capturando os elementos do formulario
const moneyUSD = 5.65
const moneyEUR = 6.15
const moneyGBP = 7.33
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
    switch (coins.value) {
        case 'USD':
            convertCurrency(input.value, moneyUSD, '$')
            break;
        case 'EUR':
            convertCurrency(input.value, moneyEUR, '€')
            break;
        case 'GBP':
            convertCurrency(input.value, moneyGBP, '£')
            break;
        default:
            break;
    }
})

// função para converter a moeda
function convertCurrency(amount, price, symbol) {
   
}