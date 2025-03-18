const input = document.querySelector('#amount');

// manipulando o input do id "amount" para receber somente números
input.addEventListener('input', (ev) => {
    const regex = /\D+/g;
    input.value = input.value.replace(regex, "");
    

} )