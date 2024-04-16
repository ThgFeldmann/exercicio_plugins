$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        alert('O formulário foi enviado com sucesso');
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000000000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true 
            }, 
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        }
    })

})