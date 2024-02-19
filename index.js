/*************************************************************************************************888******
 *Objetivo: Arquivo com funções para o desafio técnico da empresa Target Sistemas, para a vaga de estágio.
 *Data: 16/02/2024
 *Versão: 1.0
 *Autora: Yasmin Gonçalves
 ****************************************************************888**************************************/
import data from './dados.json' assert { type: 'json' }

//Função para verificar se o número informado faz parte da sequência Fibonacci
function verificarSequenciaFibonacci(numero) {

    //Inicializa a sequência Fibonacci
    let sequenciaFibonacci = [0, 1]

    //Cria a sequencia Fibonacci até o número digitado pelo usuário
    for (let i = 1; sequenciaFibonacci[sequenciaFibonacci.length - 1] < numero; i++) {

        //Calcula o próximo número da sequência somando os dois últimos números
        let numeroSeq = Number(sequenciaFibonacci[i]) + Number(sequenciaFibonacci[i - 1])

        //Adicona o próximo número à sequência
        sequenciaFibonacci.push(numeroSeq)

    }

    //Verifica se o número digitado faz parte da sequência Fibonacci, retornando true ou false
    return sequenciaFibonacci.includes(numero)
}

//Calcula o menor valor obtido em um mês, conforme os dados do arquivo json 'dados'
function calcularMenorValor() {

    //Percorre todo o array, inicialmente determinando o valor de 'menor' como o primeiro valor do array 'data'
    return data.reduce((menor, atual) => {
        //Se o valor atual for menor que o valor encontrado até agora, o valor é atribuído a 'menor'
        if(atual.valor < menor) {
            menor = atual.valor
        }
        return menor

    }, data[0].valor)

}

//Calcula o maior valor obtido em um mês, conforme os dados do arquivo json 'dados'
function calcularMaiorValor() {

    //Percorre todo o array, inicialmente determinando o valor de 'maior' como o primeiro valor do array 'data'
    return data.reduce((maior, atual) => {
        //Se o valor atual for maior que o valor encontrado até agora, o valor é atribuído a 'maior'
        if(atual.valor > maior) {
            maior = atual.valor
        }
        return maior

    }, data[0].valor)

}

function calcularDiasAcimaDaMedia(){
    let media = data.reduce((anterior, atual) => anterior + atual.valor, 0) / data.length //fazer verificacao de dias com valor em 0

    console.log(media);
}

calcularDiasAcimaDaMedia()

// console.log(verificarSequenciaFibonacci(4181)) //Retorna true, pois 4181 faz parte da sequência Fibonacci
// console.log(verificarSequenciaFibonacci(123)) //Retorna false, pois 123 não faz parte da sequência Fibonacci
// console.log('Menor valor de faturamento: ' + calcularMenorValor())
// console.log('Maior valor de faturamento: ' + calcularMaiorValor())



