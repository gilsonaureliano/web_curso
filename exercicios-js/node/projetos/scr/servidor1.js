const porta = 3003 // para encerrar o processo na saída digite control+alt+M

const express = require('express')
const app = express()

app.get('/produtos1', (req, res, next) =>{
    res.send({nome: 'Notebook', preco: 123.56}) // converte objeto para JSON
    
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`)
})