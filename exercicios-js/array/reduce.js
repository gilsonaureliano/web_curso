const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Pedro', nota: 9.2, bolsista: true},
    {nome: 'Maria', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false},

]

console.log(alunos.map(a => a.nota))
// vai somar os valores da array alunos
const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)    
    return acumulador + atual
})

console.log(resultados)
console.log('============================')
// iniciando somando com 10
console.log(alunos.map(a => a.nota))

const resultados1 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)    
    return acumulador + atual
}, 10)

console.log(resultados1)