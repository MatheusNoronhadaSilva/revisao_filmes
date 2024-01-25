const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((request, response, next ) => {

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Acesss-Control-Allow-Methods', 'GET')


    app.use(cors())


    next()
})

app.use(cors())


app.get('/v1/acmeFilmes/filmes', cors(), (req, res) => {

    let controleFilmes = require('./controller/funcoes')
    const listaFilmes = controleFilmes.getListaFilmes()
    if (listaFilmes) {
        res.json(listaFilmes)
    } else {
        res.status(404).json({ erro : 'nenhum filme foi encontrado'})
    }
})

app.get('/v1/acmeFilmes/filmes/nomes', cors(), (req, res) => {

    let controleNomes = require('./controller/funcoes')
    const listaNomes = controleNomes.getListaFilmesNomes()
    if (listaNomes) {
        res.json(listaNomes)
    } else {
        res.status(404).json({ erro : 'nenhum nome de filme foi encontrado'})
    }
})

app.get('/v1/acmeFilmes/:id', cors(), (req, res) => {

    let idFilme = req.params.id
    let controleFilmesId = require('./controller/funcoes')
    const listaFilmesId = controleFilmesId.getListaFilmeId(idFilme)
    console.log(listaFilmesId)
    if (listaFilmesId) {
        res.json(listaFilmesId)
    } else {
        res.status(404).json({ erro : 'nenhum filme com esse id foi encontrado'})
    }
})

const PORT = 3030
app.listen(PORT, () => {
    console.log(`foiiii ${PORT}`)
})

