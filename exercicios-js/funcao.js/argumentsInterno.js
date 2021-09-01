function soma () {
    let soma = 0 // toda array tem arguments vazio
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 6.3, 3.3))
console.log(soma(2.6, 3, 'TESTE'))
console.log(soma('a', 'b', 'c'))