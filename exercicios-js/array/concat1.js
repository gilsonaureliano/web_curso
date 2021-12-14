const filhas = ['Ualeska', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)

console.log(todos)
console.log(filhas)
console.log(filhos)

const filhas1 = ['Ualeska', 'Cibalena']
const filhos1 = ['Uoxiton', 'Uesclei']
const todos1 = filhas1.concat(filhos1, 'FULANO')

console.log(todos1)

console.log([]. concat([1,2], [3,4], 5, [[6,7]]))