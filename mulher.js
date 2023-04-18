const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Melissa Soares',
    imagem: 'https://www.facebook.com/photo/?fbid=649541010510744&set=pcb.649541077177404',
    minibio: 'estudante'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta",porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta,mostraPorta)