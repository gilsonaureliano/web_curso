const sequencia = {
    _valor: 1, // é convenção de programadores não alterar diretamente a variavel criada com anderline _ (não é exigencia do programa) Altere por meio de GET e SET ver abaixo
    get valor() { return this._valor++ },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
