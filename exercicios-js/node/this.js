console.log(this === global) // o This dentro de uma função aponta para o global, fora ele é FALSE
console.log(this === module)

console.log(this === module.exports) // true só fora de uma função
console.log(this === exports) // true só fora de uma função

function logThis(){
    console.log('Dentro de uma função')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === module)
    console.log(this === global)

    this.perigo = '...' // isso transforma essa varivale em global publico
}

this.perigo = '...' // aqui é o mesmo que em module.exports fica mais restrito

logThis()