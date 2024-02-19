/**********************************************************************************************************
 *Objetivo: Arquivo com funções para o desafio técnico da empresa Target Sistemas, para a vaga de estágio.
 *Data: 16/02/2024
 *Versão: 1.0
 *Autora: Yasmin Gonçalves
 *********************************************************************************************************/
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
        if (atual.valor < menor) {
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
        if (atual.valor > maior) {
            maior = atual.valor
        }
        return maior

    }, data[0].valor)

}

//Calcula a quantidade de dias em que o faturamento foi acima da media, ignorando dias com faturamento = 0
function calcularDiasAcimaDaMedia() {
    //Filtra os valores que não sejam igual a 0
    let valoresNaoZero = data.filter(item => item.valor !== 0)

    //Calcula a media
    let media = valoresNaoZero.reduce((anterior, atual) => anterior + atual.valor, 0) / valoresNaoZero.length

    //Filtra os dias que foram acima da media
    let diasAcimaDaMedia = valoresNaoZero.filter(item => item.valor > media)

    return diasAcimaDaMedia.length
}

//Calcula o percentual de representação de cada estado com base nos faturamentos
function calcularPercentualDeRepresentacao() {
    const faturamentos = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    }

    //Calcula o valor total
    const valorTotal = Object.values(faturamentos).reduce((total, valor) => total + valor, 0)

    //Calcula o percentual de representação de cada estado
    const percentuais = {}

    for (const estado in faturamentos) {
        const percentual = (faturamentos[estado] / valorTotal) * 100
        percentuais[estado] = percentual.toFixed(2) + '%'
    }

    return percentuais

}

function inverterString(string) {

    let stringInvertida = []

    //For 'ao contrário', onde pega primeiramente da última letra e vai adicionando a 'stringInvertida'
    for (let i = string.length; i !== -1; i--) {
        stringInvertida.push(string[i])
    }

    //Retorna o array concatenando em uma string
    return stringInvertida.join('')
}

//Aqui estão os testes de cada função:

console.log(verificarSequenciaFibonacci(4181)) //Retorna true, pois 4181 faz parte da sequência Fibonacci
console.log(verificarSequenciaFibonacci(123)) //Retorna false, pois 123 não faz parte da sequência Fibonacci
console.log('Menor valor de faturamento: ' + calcularMenorValor())
console.log('Maior valor de faturamento: ' + calcularMaiorValor())
console.log('Quantidade de dias acima da média: ' + calcularDiasAcimaDaMedia())
console.log(calcularPercentualDeRepresentacao())
console.log(inverterString('String invertida!'))
