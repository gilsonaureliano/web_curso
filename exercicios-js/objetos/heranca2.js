// herança PAI cadeia de prototipos (__proto__) usa o prototipo do PAI.
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'} // o pai recebe a herança do avo.
const filho = {__proto__ : pai, attr3:'C'}

console.log(filho.attr1) // vai buscar o attr1 no AVO por herança.

// outro exemplo
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super vai acessar o status que está fora dessa função
    }
}

Object.setPrototypeOf(ferrari, carro) // outra forma de estabelecer uma herança.
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

