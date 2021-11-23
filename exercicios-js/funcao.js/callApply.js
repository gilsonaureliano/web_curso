function getPreco(imposto = 0, moeda='R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1 + imposto)}`
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())

const carro = {preco: 5000, desc: 0.5}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))