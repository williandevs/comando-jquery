
$('#btn-enviar-email').click(function(event) {
    event.preventDefault();
    $.ajax({
        url: "enviar.php",
        method: "post",
        data: $('form').serialize(),
        dataType: "text",
        success: function(msg) {
            if (msg.trim() === 'Enviado com sucesso!') {

                $('#div-mensagem').url('email-sucesso.php')
                $('#div-mensagem').addClass('text-success')
                $('#div-mensagem').text(msg)
            } else {
                $('#div-mensagem').addClass('text-danger')
                $('#div-mensagem').text('Erro ao enviar a mensagem')
            }
        }
    });
});