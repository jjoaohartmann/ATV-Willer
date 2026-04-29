const transacoes = [
    {tipo: 'entrada', valor: 100},
    {tipo: 'saida', valor: 50},
    {tipo: 'entrada', valor: 250},
    {tipo: 'saida', valor: 20},
];

function pegarEntradas(lista){
    return lista.filter(item => item.tipo === 'entrada');
}

const apenasEntradas = pegarEntradas(transacoes);

console.log(apenasEntradas);