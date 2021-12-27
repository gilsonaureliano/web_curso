const sequence = {
    _id: 1,
    get id() { return this._id++} 
    // vai retornar a sequencia de numeros
}

const produtos = {}

function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}



// tudo acima está visivel só no node. Para tornar visivel as funções  para fora fazer um exports.

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}