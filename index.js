const express = require("express")

const app = express()
app.use(express.json())

const users = [
    {
        name: 'Otavio',
        age: 18,
    },
]

app.get('/usuario', function (request, response) {

    response.json(users)
})

app.post('/usuario', function (request, response) { 
    console.log(request.body)

    const novoUsuario = request.body

    users.push(novoUsuario) 

    response.status(201).json("Olá, isso é uma rota tipo POST")
})

app.listen(3000, () => {
    console.log(" meu servidor deu certo acesse http://localhost:3000/usuario")
})