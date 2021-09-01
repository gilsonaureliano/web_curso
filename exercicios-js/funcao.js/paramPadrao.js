// gera valor padrão
function soma1(a, b, c) {
a = a || 1  // se a for falso vale 1
b = b || 1 
c = c || 1
return a + b + c
}
console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0)) // ATENÇÃO aqui o return dar valor errado 3.

function soma2(a =1 , b = 1, c = 1) {
    return a + b + c
}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0)) // essa forma é mais atual e segura