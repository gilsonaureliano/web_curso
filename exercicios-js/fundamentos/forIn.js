const nota = [6.9, 3.9, 9.1, 10, 8.9]
for(let i in nota){
    console.log(`na posição ${i} a nota é ${nota[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}