// ES8: Object.values / Object.entries

const obj = { a: 1, b: 2, c: 3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação literal
const nome1 = 'Carla'
const pessoa = {
    nome1,
    ola(){
        return 'Oi gente'
    }
}

console.log(pessoa.nome1, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au Au'
    }
}

console.log(new Cachorro().falar())