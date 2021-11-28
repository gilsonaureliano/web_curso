const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave} : ${valor}`)
})

// altera propriedades no obejeto ver abaixo
Object.defineProperty(pessoa, 'dataNAscimento',{
    enumerable: true, // permite acessar com KEYS
    whitable: false, // não permite alterar
    value: '01/01/2019'
}
)
console.log(pessoa.dataNAscimento)

//Object.assign (reuni todos os objetos em um, sem repetir)
const dest = {a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const o3 = Object.assign(dest, o1, o2)

console.log(dest) // o 1 será substituido por 4

Object.freeze(o3) // congela contra alteração futura
