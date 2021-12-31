const { set } = require("lodash");

// não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeira').add('Santa Cruz')

console.log(times)

times.delete('Palmeira')
console.log(times)

const nomes = ['Raquel', 'Paulo', 'Pedro', 'Paulo' ] // não vai repetir 2 Paulo
const nomesSet = new Set(nomes)
console.log(nomesSet)// não vai repetir 2 Paulo