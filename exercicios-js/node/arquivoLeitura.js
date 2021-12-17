const fs = require('fs') // a biblioteca fs é nativa do NODE

const caminho = __dirname + '/arquivo.json' // vai procurar o arquivo

// sincrono... esses exemplo é perigoso travar o processo vent lup
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // converte para objeto
    console.log('Resultado assincrono')
    console.log(`${config.db.host}: ${config.db.port}`)
}) // esse resultado vai aparecer no final do terminal por ser assincrono

// outra forma

const config = require('./arquivo.json')
console.log(config.db)

// leitura de uma pasta

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})