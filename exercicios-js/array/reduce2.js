const alunos1 = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Pedro', nota: 9.2, bolsista: true},
    {nome: 'Maria', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false},

]
//Desafio 1: Todos os alunos são bolsistas?

const bolsas = alunos1.map(a => a.bolsista)
console.log(bolsas)
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos1.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algums aluno é bolsista?

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos1.map(a => a.bolsista).reduce(algumBolsistas))