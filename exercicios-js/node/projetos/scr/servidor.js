// criação de um pseudo "banco de dados na memeoria" para persistir na memoria
const porta = 3003 // para encerrar o processo na saída digite control+alt+M

const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require(`./bancoDeDados`)


app.use(bodyParser.urlencoded({ extended: true })) // do lado do servidor usando Postman com body tipo urlencoded,transforma a requisição em obejeto


app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())    
}) // vai pegar a lista completa dos produtos


app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
}) // vai pegar produtos pelo id

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    
    })
    res.send(produto) // converte para JSON
}) // post envia para o servidor

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    
    })
    res.send(produto) // converte para JSON
}) // put para alterar dados no servidor

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // converte para JSON
}) // deletar dados no servidor dado id


app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`)
})