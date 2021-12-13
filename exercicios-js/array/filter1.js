const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo vidro', preco: 24.25, fragil: true},
    {nome: 'Copo Plastico', preco: 12.03, fragil: false},
]

console.log(produtos.filter(function(k) {
    return k.preco > 2500
}
))

console.log(produtos.filter(function(k) {
    return k.fragil === true
}
))

const caro = produto => produto.preco >= 100
const fragilidade = fragili => fragili.fragil === true // não precisaria escrever o true
    

console.log(produtos.filter(caro).filter(fragilidade))