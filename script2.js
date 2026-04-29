let investimento = parseFloat(process.argv[2]);
let TaxaPercentual = parseFloat(process.argv[3]);
let tempo = parseFloat(process.argv[4]);

if (isNaN(investimento) || isNaN(TaxaPercentual) || isNaN(tempo)){
    console.log("-------------------------------Instuções---------------------------------")
    console.log("Uso correto: node arquivo.js <investimento> <juros> <tempo>")
    console.log("Exemplo: node arquivo.js 1000 5 12 (1000 de capital, 5% ao mês, 12 meses)")
    console.log("-------------------------------------------------------------------------")
    process.exit(1);
}

let juros = investimento * (TaxaPercentual / 100) * tempo;

let montante = investimento + juros;

console.log("-------------Calculadora Simples-----------------")
console.log(`Dinheiro Investido: R$ ${investimento}`);
console.log(`Taxa de Juros: R$ ${TaxaPercentual}`);
console.log(`Tempo: R$ ${tempo} Períodos`);
console.log("--------------------------------------------------");
console.log(`uros totais: R$ ${juros}`);
console.log(`Montante final: R$ ${montante}`)