// Recupera o valor do parâmetro "produto" da URL
const params = new URLSearchParams(window.location.search);
const produtoId = params.get('produto');

// Define a imagem, descrição e preço do produto com base no ID recuperado
const produtoImagem = document.getElementById('produto-imagem');
const produtoDescricao = document.getElementById('produto-descricao');
const produtoPreco = document.getElementById('produto-preco');

// Definir o valor do limite de caracteres
const limiteCaracteres = 150;

// Função para exibir a descrição completa
function mostrarDescricaoCompleta() {
  produtoDescricao.innerHTML = descricaoCompletaTexto;
}

let descricaoCompletaTexto;
let descricaoResumidaTexto;
let redirecionamentoURL;

switch (produtoId) {
  case '1':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.01.35 - beach houses for rent, pool, chateau.png';
    descricaoCompletaTexto = 'Uma deslumbrante casa no Rio Grande do Norte encanta com sua arquitetura moderna e localização privilegiada. Rodeada por praias de areia dourada e águas cristalinas, esta residência exala elegância e conforto. Seus amplos janelões de vidro proporcionam uma vista panorâmica do oceano, enquanto a brisa marinha adentra os espaçosos cômodos. A decoração tropical harmoniza perfeitamente com os móveis de madeira rústica, criando uma atmosfera acolhedora e sofisticada. O jardim exuberante abriga uma piscina convidativa, perfeita para relaxar e aproveitar o clima ensolarado. Com todos esses atributos, esta casa é um refúgio paradisíaco no Rio Grande do Norte.';
    descricaoResumidaTexto = descricaoCompletaTexto.substring(0, limiteCaracteres) + '...';
    produtoPreco.textContent = 'R$1000,00 P/DIA';
    redirecionamentoURL = "/paginas/Finalizar.html?produto=1";
    break;
  case '2':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.01.29 - beach houses for rent, pool, chateau.png';
    descricaoCompletaTexto = 'No coração do Paraná, encontra-se uma linda casa que encanta com sua arquitetura harmoniosa e detalhes encantadores. Com uma fachada imponente, revestida em tijolos aparentes e grandes janelas de madeira, a residência exala charme e elegância. Ao adentrar, somos recebidos por um amplo hall de entrada, com um belo piso de mármore e uma escadaria imponente que nos conduz aos demais cômodos. A sala de estar é espaçosa e aconchegante, com uma lareira central que aquece as noites frias do inverno paranaense. A cozinha é um verdadeiro sonho de gourmet, equipada com eletrodomésticos modernos e uma ilha central, onde os moradores podem preparar suas refeições com facilidade. A área de jantar adjacente é banhada pela luz natural que adentra pelas grandes janelas, proporcionando um ambiente acolhedor para desfrutar das refeições em família.';
    descricaoResumidaTexto = descricaoCompletaTexto.substring(0, limiteCaracteres) + '...';
    produtoPreco.textContent = 'R$1500,00 P/DIA';
    redirecionamentoURL = "/paginas/Finalizar.html?produto=2";
    break;
  case '3':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.04.32 - houses for rent, pool, brazil, mansion, countryside of São Paulo.png';
    descricaoCompletaTexto = 'Linda casa em Pompéia, interior de São Paulo, com uma deslumbrante piscina de 3 metros, perfeita para momentos de relaxamento e diversão em família.';
    descricaoResumidaTexto = descricaoCompletaTexto.substring(0, limiteCaracteres);
    produtoPreco.textContent = 'R$2000,00 P/DIA';
    redirecionamentoURL = "/paginas/Finalizar.html?produto=3";
    break;
  case '4':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.04.29 - houses for rent, pool, brazil, mansion, countryside of São Paulo.png';
    descricaoCompletaTexto = 'Casa encantadora em Marília, SP. Com um estilo arquitetônico tradicional e elegante, possui um jardim exuberante e bem cuidado, com árvores frutíferas. Seus cômodos são amplos e arejados, com acabamentos refinados. A área de lazer conta com uma piscina convidativa e um espaço gourmet perfeito para receber amigos e família. Um refúgio acolhedor e tranquilo no interior de São Paulo.';
    descricaoResumidaTexto = descricaoCompletaTexto.substring(0, limiteCaracteres) + '...';
    produtoPreco.textContent = 'R$2500,00 P/DIA';
    redirecionamentoURL = "/paginas/Finalizar.html?produto=4";
    break;
  case '5':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.04.20 - houses for rent, pool, brazil, mansion, countryside of São Paulo.png';
    descricaoCompletaTexto = 'Uma linda casa em Parapuã, interior de São Paulo, exibe um charme encantador. Com arquitetura rústica e elegante, possui amplos cômodos, janelas amplas que permitem a entrada de luz natural, um espaçoso jardim com árvores frondosas e uma varanda convidativa. Seu ambiente tranquilo e acolhedor oferece o refúgio perfeito para desfrutar da serenidade do campo.';
    descricaoResumidaTexto = descricaoCompletaTexto.substring(0, limiteCaracteres) + '...';
    produtoPreco.textContent = 'R$3000,00 P/DIA';
    redirecionamentoURL = "/paginas/Finalizar.html?produto=5";
    break;
  case '6':
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.03.03 - houses for rent, pool, brazil, mansion.png';
    descricaoCompletaTexto = 'Este imóvel localizado em Guarujá uma bela casa grande com 4 quartos, ideal para famílias grandes ou grupos de amigos que procuram um refúgio tranquilo longe da cidade. A casa possui uma bela área de piscina, perfeita para os dias quentes de verão. Ao entrar na casa, você encontrará uma sala de estar espaçosa e confortável, com sofás e poltronas para relaxar. Há também uma sala de jantar, perfeita para refeições em família ou para entreter amigos. A cozinha é moderna e totalmente equipada, com tudo o que você precisa para preparar refeições deliciosas. Os 4 quartos da casa são espaçosos e confortáveis, com camas grandes e roupa de cama de qualidade. Alguns dos quartos têm banheiros privativos, e há banheiros adicionais espalhados pela casa. Fora da casa, a área de piscina é um destaque, com uma grande piscina cercada por espreguiçadeiras e guarda-sóis para relaxar e tomar sol. Há também uma área de churrasco, perfeita para preparar refeições ao ar livre e desfrutar da companhia de amigos e familiares. A propriedade é cercada por belos jardins, árvores, e bem próximo da praia da enseada oferecendo privacidade e um ambiente tranquilo para desfrutar da natureza. Localizada em Guarujá, no Litoral Paulista, esta casa é uma excelente opção para quem procura uma fuga da agitação da cidade e quer relaxar em um ambiente bonito e tranquilo.';
    descricaoResumidaTexto = descricaoCompletaTexto.substring(0, limiteCaracteres) + '...';
    produtoPreco.textContent = 'R$3500,00 P/DIA';
    redirecionamentoURL = "/paginas/Finalizar.html?produto=6";
    break;
  default:
    produtoImagem.src = '/imagens/Produtos/DALL·E 2023-03-10 14.04.39 - beach houses for rent, pool, chateau.png';
    descricaoResumidaTexto = 'Produto não encontrado';
    produtoPreco.textContent = '';
    break;
}

produtoDescricao.textContent = descricaoResumidaTexto;

if (descricaoCompletaTexto.length > limiteCaracteres) {
    const botaoMostrarMais = document.createElement('button');
    botaoMostrarMais.textContent = 'ABRIR DESCRIÇÃO';
    botaoMostrarMais.classList.add('mostrar-mais-btn'); // Adicione a classe ao botão
    botaoMostrarMais.addEventListener('click', mostrarDescricaoCompleta);
    produtoDescricao.appendChild(botaoMostrarMais);
}

function rent(event) {
  event.preventDefault(); // Previne o comportamento padrão de submit do formulário
  window.location.href = redirecionamentoURL;
}
