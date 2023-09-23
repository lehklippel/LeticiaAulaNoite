let tripulacoes = [];

// Cadastro das tripulações
function cadastrarTripulacoes() {
   for (let volta = 1; volta <= 5; volta++) {
    const nomeTripulacao = prompt(`Qual o nome da tripulação ${volta}?`);
    const nomeCapitao = prompt (`Qual o nome do capitão da tripulação ${volta}?`);

    const infTripulacao = {
        nomeTripulacao: nomeTripulacao,
        nomeCapitao: nomeCapitao,
        avanco: 0 
    };
    tripulacoes.push(infTripulacao);
  }
  console.log(tripulacoes);

  alert("Tripulações cadastradas com sucesso!");
}
cadastrarTripulacoes();

// Simulação da corrida
for (let etapas = 1; etapas <= 10; etapas++) {
    console.log(`Etapa ${etapas}:`);
    for (const tripulacao of tripulacoes) {
        const avanco = avancarEtapa(tripulacao);
        console.log(`${tripulacao.nomeTripulacao} avançou ${avanco} metros. Total: ${tripulacao.avanco} metros.`);
    }          
    const vencedor = determinarVencedor(tripulacoes);
    if (vencedor) {
        console.log(`${vencedor.nomeTripulacao} encontrou o One Piece e é o vencedor! Parabéns, capitão ${vencedor.nomeCapitao}!`);
        break;
    }
}

// Função para rodar dado
function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função para avançar uma etapa
function avancarEtapa(tripulacao) {
    const avanco = rolarDado();
    tripulacao.avanco += avanco; 
    return avanco;
}

// Função para determinar a tripulação vencedora
function determinarVencedor(tripulacoes) {
    let vencedor = null;
    for (const tripulacao of tripulacoes) {
        if (tripulacao.avanco >= 100) {
            vencedor = tripulacao;
            break;
        }
    }
    return vencedor;
}

// Se ninguém achar o One Piece
const vencedor = determinarVencedor(tripulacoes);
if (!vencedor) {
    console.log("Nenhuma tripulação encontrou o One Piece após 10 etapas. A busca continua!");
}
