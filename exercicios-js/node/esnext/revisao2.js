//Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Functon (this)
const lexicon1 = () => console.log(this === exports)
lexicon1()

// parametro default
function log(texto = 'NODE') {
    console.log(texto)
}

log()
log('Substitui o NODE')

// operador rest (agrupa)

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))