function falarDepoisDe( segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            //reject(frase)
        }), segundos * 1000
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?')) //O .then é para chamar o Promise resolve
    .then(outraFrase => console.log(outraFrase))
    //.catch(e => console.log(e)) // O .catch é para chamar o Promise reject (tratando um erro por exemplo)