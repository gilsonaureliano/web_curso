const moduloA = require('./moduloA') // o ponto barra ./ é para indicar o caminho do moduloA. ou seja, está na mesma pasta caminho relativo.
const { boanoite } = require('./moduloB')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(boanoite())
console.log(moduloB)