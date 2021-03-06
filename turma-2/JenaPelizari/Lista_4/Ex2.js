// Escreva um programa que passe por todos os números de 1 a 50 
// e para cada um deles imprima na tela se o número é par ou ímpar. 
// Caso o número também seja primo, o programa deve dizer que ele é primo.  
​
function ehPrimo(numero) {
    let contador = 2
    let achouDivisorAlemDeleMesmoEUm = false
​
    if (numero === 1) {
        return false
    }
​
    while (contador < numero) {
        if (numero % contador === 0) {
            achouDivisorAlemDeleMesmoEUm = true
        }
        contador++
    }
​
    if (achouDivisorAlemDeleMesmoEUm) {
        return false
    } else {
        return true
    }
}
​
let contador = 1
let fimContador = 50
​
while (contador <= fimContador) {
​
    let sobraDaDivisao = contador % 2
​
    if (sobraDaDivisao === 0) {
        console.log(contador, 'PAR', ehPrimo(contador) ? 'É Primo' : 'Não é primo')
    } else {
        console.log(contador, 'IMPAR', ehPrimo(contador) ? 'É Primo' : 'Não é primo')
    }
    contador++
}