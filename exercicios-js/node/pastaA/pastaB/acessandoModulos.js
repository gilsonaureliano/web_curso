const moduloA = require('../../moduloA') // ../../ vai sair da pastaB e da pastA e procurar o arquivo
console.log(moduloA.ola)

const http = require('http')
http.createServer((req, res) =>{
    res.write('Bom dia!')
    res.end()
}).listen(8080) // apresenta frase no brauser

// aviso: o arquivo index.js é chamado automativamente ao informar o caminho