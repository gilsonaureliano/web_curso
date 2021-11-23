function criarProduto (nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2500.89))
console.log(criarProduto('IPad', 1890.60))
