function login(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores de usuário e senha do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aqui você pode fazer uma validação dos campos, se necessário

    // Verifica as credenciais no localStorage
    var cadastro = JSON.parse(localStorage.getItem("cadastro"));

    // Verifica se o cadastro existe e as credenciais estão corretas
    if (cadastro && username === cadastro.email && password === cadastro.senha) {
        // Redirecionar para a página HomeLogado.html
        window.location.href = "/paginas/homeLogado.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}
