// capturando os elementos do formulario
const moneyUSD = 5.65
const moneyEUR = 6.15
const moneyGBP = 7.33
const input = document.querySelector('#amount');
const coins = document.querySelector('#currency')
const form = document.querySelector('form');
const footer = document.querySelector('main footer');
const description = document.querySelector('#description');
const result = document.querySelector('#result');

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
    try {
        // aplica a classe que exibe o footer para mostrar o resultado
        description.innerHTML = `${symbol} 1 =  ${formatCurrency(price)}`
        const count = amount * price
        result.innerHTML = `R$ ${count.toFixed(2)}`
        footer.classList.add('show-result')
    } catch (err) {
        // remove a classe do footer para esconder o resultado
        footer.classList.remove('show-result')
        alert('Ocorreu um erro ao converter a moeda')
   
    }

} function formatCurrency(value) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}