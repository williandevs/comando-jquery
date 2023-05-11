
$('#btn-enviar-email').click(function (event) {
    event.preventDefault();
    $.ajax({
        url: "enviar.php",
        method: "post",
        data: $('form').serialize(),
        dataType: "text",
        success: function (response) {
            window.location.replace("email-sucesso.php");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            $("#msgRamais").html('×ATENÇÃO! Ocorreu um erro ao tentar obter o ramal. Contate o suporte técnico.');
        }


    });
});
