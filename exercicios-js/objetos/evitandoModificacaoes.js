// Object.preventExtensions Não deixa aumentar novos atributos, pode excluir
const produto = Object.preventExtensions({
    nome:'qualquer', preco:1.99, tag: 'promocao'
})
console.log('Extensível', Object.isExtensible(produto))

//Object.seal não permiti excluir ou incluir novos atributos, permitir alterar os valores ver abaixo o 35
const pessoa= {nome:'Juliana', idade: 35}
Object.seal(pessoa)

pessoa.sobreNome = 'SILVA'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = sela tudo e os valores não podem ser alterados

Object.freeze(pessoa)
pessoa.idade = 30000000000
console.log(pessoa)