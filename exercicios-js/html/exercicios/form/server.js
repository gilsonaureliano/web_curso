const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003) //PS C:\Users\gilso\Documents\Git & GitHub\web_curso\exercicios-js\html\exercicios\form> node server.js precisa ser iniciado como servidor local