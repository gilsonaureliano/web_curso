const anonima= process.argv.indexOf('-a') !== -1 // processo pelo terminal com a inclusão da fleg -a pelo terminal no arquivo entradaESaida.js   
console.log(anonima)

if(anonima){
    process.stdout.write('Fala Anônimo! \n')// \n é para pular uma linha
    process.exit() // saidado processso
} // saída pelo terminal
    else{
        process.stdout.write('Inform seu nome: ')
        process.stdin.on('data', data => {
            const nome = data.toString()//.replace('\n','')
            process.stdout.write(`Fala ${nome}`) // saida padrao console
            process.exit()
        })
}

