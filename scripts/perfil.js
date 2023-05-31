document.addEventListener("DOMContentLoaded", function() {
    // Obtém o cadastro do localStorage
    var cadastro = localStorage.getItem("cadastro");
    
    // Verifica se o cadastro existe
    if (cadastro) {
      // Parse do JSON para obter o objeto de cadastro
      cadastro = JSON.parse(cadastro);
      
      // Obtém o elemento onde o nome será exibido
      var bemVindoElemento = document.querySelector(".bemVindo");
      
      // Obtém a primeira letra do nome em caixa alta
      var primeiraLetra = cadastro.name.charAt(0).toUpperCase();
      
      // Obtém o restante do nome em caixa baixa
      var restanteNome = cadastro.name.slice(1).toLowerCase();
      
      // Cria o texto de boas-vindas com a primeira letra em caixa alta e o restante do nome em caixa baixa
      var bemVindoTexto = document.createTextNode("Bem-vindo, " + primeiraLetra + restanteNome + ", é um prazer ter você conosco!");
      
      // Adiciona o texto de boas-vindas ao elemento
      bemVindoElemento.appendChild(bemVindoTexto);
    }
  });
  