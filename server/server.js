/*let http = require('http')
let server = http.createServer()
let fs = require('fs')
let url = require('url')

server.on('request', (request, response) => {

    response.writeHead(200)
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme' : query.name

    fs.readFile('index.html', 'utf-8', (err, data) => {

        if (err) throw err

        response.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })

        data = data.replace('{{ name }}', name)

        response.end(data)

    })

    ///
    response.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })

    if (query.name == undefined) {
        response.write('Bonjour anonyme')
    } else {
        response.write('Bonjour ' + query.name)
    }
    ///

    response.end()

})

server.listen(8080)*/

/*const EventEmitter = require('events')

let monEcouteur = new EventEmitter()

monEcouteur.on('saute', function(a, b) {
    console.log("J'ai sauté")
})

monEcouteur.emit('saute', 10, 20)*/


/*let app = require('./app').start(8080)

app.on('root', function(response) {
    response.write('Je suis à la racine')
})*/

let express = require('express')
let app = express()

app.get('/', (request, response) => {
    response.send('salut tu es à la racine')
})
app.get('/demo', (request, response) => {
    response.send('salut tu es sur la demo')
})

app.listen(8080)
