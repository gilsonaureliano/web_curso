// Esse exemplo faz parte dos exemplos instanaciaUnica e instanciaNova e mostra como evitar o cache do node ao fazer require
const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica')

const contadorC = require('./instanciaNova')() //aqui use () para chamar
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // o cache de A afetou o resultado de B que passou para 3

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) // não afetou o resultador de D