const TaxaCambio = 5.5
const ValorReal = parseFloat(process.argv[2]);

if (isNaN(ValorReal)){
    console.log('Uso: node arquivo.js <Valor_em_Reais>')
} else {
    const ValorDolar = ValorReal / TaxaCambio

    console.log('---------------Conversão----------------');
    console.log(`BRL: R$ ${ValorReal}`);
    console.log(`Taxa fixa: R$ ${TaxaCambio}`);
    console.log(`USD: $ ${ValorDolar}`);
    console.log("----------------------------------------");
}