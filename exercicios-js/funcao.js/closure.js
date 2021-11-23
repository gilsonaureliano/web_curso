// closure é o escopo criado quando uma função é declarada

const x = 'GLOBAL'

function fora (){
    const x = 'LOCAL'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())