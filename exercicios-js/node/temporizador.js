const scheudule = require('node-schedule')

const tarefa1 = scheudule.scheduleJob('*/5 * 15 * * 1', function () {
    console.log('Executando tarefa 1', new Date().getSeconds())
})
//Essa função recebe como parâmetro uma string de configuração no formato 'segundo minuto hora diaDoMês mês diaDaSemana', que indica quando uma função será executada.
// Na aula, essa string seta a execução do código para um exemplo específico envolvendo o dia e a hora em que a aula foi gravada, que é '*/5 * 12 * * 2', o que significa que a função será executada de 5 em 5 segundos, porém apenas durante a hora 12 de uma terça-feira, e se você não estiver testando este exemplo em algum momento em que a hora é 12 em uma terça feira, o código não funcionará. 0 domingo, 1 segunda, 2 terça ...

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa1')
}, 20000) // parando tarefa1 após 20 segundos

// setInterval dispara uma função de tempo em tempo
// setImmediate

const regra = new scheudule.RecurrenceRule()
regra.dayOfWeek = [new scheudule.Range(1,5)] // vai repetir a ação de segunda a sexta
regra.hour = 15 // hora para repetir
regra.second = 30

const tarefa2 = scheudule.scheduleJob(regra, function(){
    console.log('Executando tarefa2', new Date().getSeconds() )
})

setTimeout(function(){
    tarefa2.cancel()
    console.log('Cancelando tarefa2')
}, 100000) // parando tarefa1 após 100 segundos