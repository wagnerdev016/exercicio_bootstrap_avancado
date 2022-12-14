const form = document.getElementById('form')
const numeroA = document.getElementById('numero-A')
const numeroB = document.getElementById('numero-B')
const description = document.getElementById('descricao')
let = formValido = false

function validaNumero(A, B)  {
    return B > A;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Parabéns! os números <b>${numeroA.value}</b> e <b>${numeroB.value}</b> foram enviados`
    

    formValido = validaNumero(numeroA.value, numeroB.value)
    if (formValido) {
        
        const mensagemDeSucesso = document.querySelector('.success-message')
        mensagemDeSucesso.innerHTML = mensagemSucesso
        mensagemDeSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
        description.value = '';
        document.querySelector('.error-message').style.display = 'none';
        numeroB.style = '';
        

    } else {
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        
    }

})



