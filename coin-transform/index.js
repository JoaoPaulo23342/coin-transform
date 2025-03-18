const input = document.querySelector('#amount')

// manipulando o input do id "amount" para receber somente números
input.addEventListener('input', (ev) => {
    const regex = /\d+/g
    const Value = input.value
    console.log(Value.match(regex))

} )