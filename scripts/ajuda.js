
function enviar(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores do formulário
    var name = document.getElementById("name").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var cidade = document.getElementById("cidade").value;
    var duvida = document.getElementById("duvida").value;

    // Aqui você pode fazer validações dos campos, se necessário

    // Exibe a mensagem de sucesso
    var mensagem = document.getElementById("mensagem");
    mensagem.innerText = "Enviado com sucesso!";

    // Verifica se o usuário está logado
    var cadastro = JSON.parse(localStorage.getItem("cadastro"));
    var isLoggedIn = cadastro !== null && cadastro.isLoggedIn === true;

    // Redireciona para a página correta
        window.location.href = "/paginas/HomeLogado.html";
}
