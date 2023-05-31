// Recupera o valor do parâmetro "produto" da URL
const params = new URLSearchParams(window.location.search);
const produtoId = params.get('produto');

// Obtém a data atual do computador
const dataAtual = new Date();

// Obtém o elemento do cabeçalho do calendário para exibir o mês atual
const calendarioMes = document.querySelector('#calendario-container h2');

// Obtém o contêiner dos dias do calendário para adicionar os dias dinamicamente
const calendarioDias = document.querySelector('.calendario-dias');

// Define o número do mês atual (0-11) e o ano atual
let mesAtual = dataAtual.getMonth();
const anoAtual = dataAtual.getFullYear();

// Obtém os elementos dos botões de avançar e retroceder
const btnAvancar = document.querySelector('#btn-avancar');
const btnRetroceder = document.querySelector('#btn-retroceder');

// Define o número máximo de meses que podem ser avançados e retrocedidos
const maxMesesAvanco = 3;

// Event listener para o botão de avançar
btnAvancar.addEventListener('click', avancarMes);

// Event listener para o botão de retroceder
btnRetroceder.addEventListener('click', retrocederMes);

// Função para atualizar o calendário com base no mês e ano fornecidos
function atualizarCalendario(mes, ano) {
  // Define o mês no cabeçalho do calendário
  calendarioMes.textContent = obterNomeMes(mes);

  // Limpa os dias do calendário
  calendarioDias.innerHTML = '';

  // Obtém o número de dias no mês fornecido
  const numeroDias = obterNumeroDias(mes, ano);

  // Adiciona os dias ao calendário
  for (let dia = 1; dia <= numeroDias; dia++) {
    const diaElemento = document.createElement('div');
    diaElemento.textContent = dia;
    diaElemento.classList.add('calendario-dia');

    // Verifica se o dia é passado
    const dataDia = new Date(ano, mes, dia);
    if (isDataPassada(dataDia)) {
      diaElemento.classList.add('passado');
      diaElemento.classList.remove('disponivel'); // Remove a classe 'disponivel' dos dias passados
    } else {
      diaElemento.classList.add('disponivel');
      diaElemento.addEventListener('click', () => {
        diaElemento.classList.toggle('selecionado');
        atualizarTotalConta();
      });
    }
    calendarioDias.appendChild(diaElemento);
  }
}

// Função para obter o nome do mês com base no número do mês
function obterNomeMes(mes) {
  const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return nomesMeses[mes];
}

// Função para obter o número de dias em um determinado mês e ano
function obterNumeroDias(mes, ano) {
  return new Date(ano, mes + 1, 0).getDate();
}

// Função para verificar se uma data é passada em relação à data atual
function isDataPassada(data) {
  const dataAtual = new Date();
  return data < dataAtual;
}

// Chama a função inicial para exibir o calendário com o mês atual
atualizarCalendario(mesAtual, anoAtual);

// Define a imagem e preço do produto com base no ID recuperado
const produtoImagem = document.getElementById('produto-imagem');
const produtoPreco = document.getElementById('produto-preco');

switch (produtoId) {
  case '1':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.01.35 - beach houses for rent, pool, chateau.png';
    produtoPreco.textContent = 'R$1000,00 P/DIA';
    break;
  case '2':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.01.29 - beach houses for rent, pool, chateau.png';
    produtoPreco.textContent = 'R$1500,00 P/DIA';
    break;
  case '3':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.04.32 - houses for rent, pool, brazil, mansion, countryside of São Paulo.png';
    produtoPreco.textContent = 'R$2000,00 P/DIA';
    break;
  case '4':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.04.29 - houses for rent, pool, brazil, mansion, countryside of São Paulo.png';
    produtoPreco.textContent = 'R$2500,00 P/DIA';
    break;
  case '5':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.04.20 - houses for rent, pool, brazil, mansion, countryside of São Paulo.png';
    produtoPreco.textContent = 'R$3000,00 P/DIA';
    break;
  case '6':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.03.03 - houses for rent, pool, brazil, mansion.png';
    produtoPreco.textContent = 'R$3500,00 P/DIA';
    break;
  default:
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.04.39 - beach houses for rent, pool, chateau.png';
    produtoPreco.textContent = '';
    break;
}

// Adiciona um ouvinte de evento de clique aos elementos de classe "calendario-dia"
const calendarioDiaElementos = document.querySelectorAll('.calendario-dia');
calendarioDiaElementos.forEach(diaElemento => {
  diaElemento.addEventListener('click', () => {
    // Adicione sua lógica para selecionar ou desselecionar o dia aqui
    diaElemento.classList.toggle('selecionado');
    atualizarTotalConta(); // Atualiza o valor total da conta quando um dia é selecionado ou desselecionado
  });
});

// Função para atualizar o valor total da conta com base nos dias selecionados
function atualizarTotalConta() {
  const diasSelecionados = document.querySelectorAll('.calendario-dia.selecionado');
  const totalConta = document.getElementById('totalConta');
  const precoProduto = parseFloat(produtoPreco.textContent.replace('R$', '').replace(',', '.'));
  const valorTotal = diasSelecionados.length * precoProduto;
  totalConta.textContent = 'Total: R$' + valorTotal.toFixed(2);
}
// Função para avançar para o próximo mês
function avancarMes() {
  if (mesAtual < 11 && mesAtual + 1 <= mesAtual + maxMesesAvanco) {
    mesAtual++;
    atualizarCalendario(mesAtual, anoAtual);
  }
}

// Função para retroceder para o mês anterior
function retrocederMes() {
  if (mesAtual > 0) {
    mesAtual--;
    atualizarCalendario(mesAtual, anoAtual);
  }
}
