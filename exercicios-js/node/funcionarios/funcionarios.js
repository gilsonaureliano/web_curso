const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //axios faz requisições do que está remoto, é uma biblioteca que foi instalada


axios.get(url).then(response => {
    const funcionarios =response.data
    // console.log(funcionarios) // vai importar a url citada acima


    const paisChina = origem => origem.pais === 'China'
    const sexo = sexo => sexo.genero === 'F'
 
    //console.log(funcionarios.filter(paisChina).filter(sexo))
    const mulherChina = funcionarios.filter(paisChina).filter(sexo)
    console.log(mulherChina)

    const salarios = mulherChina.map( s => s.salario)
    console.log(salarios)
 
    var valor = 0
    const mulherChinaMaiorSalario  = salarios.map(function(resultado){
        
        if (resultado > valor){
            valor = resultado
        }

    })
    console.log(valor)
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    console.log('Maior Salario')
    const resultadoFinal = resultadoFinal => resultadoFinal.salario === valor

    console.log(mulherChina.filter(resultadoFinal))
    
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    console.log('Menor salario')
    
    const menoSalario =(func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    console.log(mulherChina.reduce(menoSalario))
})