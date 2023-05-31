function cad(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos do formulário
    var name = document.getElementById("name").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var nascimento = document.getElementById("nascimento").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cidade = document.getElementById("cidade").value;
    var telefone = document.getElementById("telefone").value;

    // Valida a data de nascimento
    var dataNascimento = new Date(nascimento);
    var dataAtual = new Date();
    var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    var mes = dataAtual.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
        idade--;
    }
    if (idade < 18) {
        alert("Você deve ter pelo menos 18 anos para se cadastrar.");
        return;
    }

    // Cria um objeto com os dados do cadastro
    var cadastro = {
        name: name,
        sobrenome: sobrenome,
        nascimento: nascimento,
        email: email,
        senha: password,
        cidade: cidade,
        telefone: telefone
    };

    // Armazena o cadastro no localStorage
    localStorage.setItem("cadastro", JSON.stringify(cadastro));

    // Redireciona para a página HomeLogado.html
    window.location.href = "/paginas/homeLogado.html";
}
