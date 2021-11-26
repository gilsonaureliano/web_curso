// colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca'] = 'geral'
produto.preco = 220

console.log(produto)

delete produto.preco
console.log(produto)
// outra forma de criar objeto
const carro = {
    modelo : 'A4',
    valor : 89669,
    proprietario : {
        nome: 'pedro',
        idade: 45,
        endereco: {
            rua: 'abc',
            numero: 45,
            cidade: 'recife'
        }
    },
    condutores: [{
        nome:'paulo',
        idade: 'ana'

    } , {   nome:'ze',
            idade: 45  }             ]

} 
console.log(carro)

carro.proprietario.endereco.numero = 1000

console.log(carro)

