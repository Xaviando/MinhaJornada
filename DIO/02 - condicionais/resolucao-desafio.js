/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 3.59;
const precoGasolina = 4.79;
const tipoCombustivel = 'Gasolina';
const gastoMedio = 10.5;
const distancia = 418;

const consumo = distancia / gastoMedio;

if (tipoCombustivel === 'Etanol') {
    const despesa = consumo * precoEtanol;
    console.log(despesa.toFixed(2));
} else {
    const despesa = consumo * precoGasolina;
    console.log(despesa.toFixed(2));
}