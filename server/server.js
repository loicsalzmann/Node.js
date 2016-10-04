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

let http = require('http')
let server = http.createServer()
let url = require('url')
const EventEmitter = require('events')

let App = {
    start: function(port) {
        let emitter = new EventEmitter()
        let serveur = http.createServer((request, response) => {

            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })

            if (request.url === '/') {
                emitter.emit('root', response)
            }

            response.end()

        }).listen(port)

        return emitter
    }
}

let app = App.start(8080)

app.on('root', function(response) {
    response.write('Je suis à la racine')
})
