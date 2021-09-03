const frabricante = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome , indice){
    console.log(`${indice + 1} . ${nome}`)
}

frabricante.forEach(imprimir)

frabricante.forEach(function(frabricante){
    console.log(frabricante)
})