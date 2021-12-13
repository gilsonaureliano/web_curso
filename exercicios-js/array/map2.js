const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços

const carrinho3 = carrinho.map(JSON.parse)
console.log(carrinho3)

const precos = produto => produto.preco

const resul = carrinho3.map(precos)

console.log(resul)