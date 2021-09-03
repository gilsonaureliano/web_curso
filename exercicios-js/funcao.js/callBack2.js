const notas =[2.9, 9.9, 5.3, 8.9, 0.5, 7.0, 7.6, 7.3]

//sem callback
const notasBaixa1 = []
for (let i in notas) {
    if (notas[i] < 7 ){
        notasBaixa1.push(notas[i])
    }
}
console.log(notasBaixa1)

// com callBack

const notaBaixa2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notaBaixa2)

// com callBack e Arrow
const notaBaixa3 = notas.filter(notas => notas < 7)
console.log(notaBaixa3)