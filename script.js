let produto = document.querySelector('#nome');
let preco = document.querySelector('#preco');
let desconto = document.querySelector('#desconto');
let total = document.querySelector('#total');
let button = document.querySelector('button');

button.addEventListener('click',function(element){
    if (preco.value == '' || desconto.value == ''){
        alert('Por favor! Preencha todos os campos.')
    } else {
        element.preventDefault();
        var conveção = desconto.value * preco.value / 100;
        total.value = preco.value - conveção;
    }
})
