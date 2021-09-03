function Carro(velocidadeMaxima = 200 , delta = 5){
    //atributo privado - o let ou const fica privado a função
    let velocidadeAtual = 0


    // metdo publico- o THIS torna publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta

        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())

console.log('-------------------------')
const ferrari = new Carro (350 , 80)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log('-------------------------')
console.log(this)
console.log(velocidadeAtual) // aqui dar erro, pois o LET é local privado na funcão carro