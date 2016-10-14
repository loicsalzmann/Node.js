let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')
let Message = require('./models/message')


// Template engine
app.set('view engine', 'ejs')


// Middlewares
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'qwertzuiop',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(require('./middlewares/flash'))


// Routes
app.get('/', (request, response) => {
    Message.all(function(messages) {
        response.render('pages/index', {messages: messages})
    })
})
app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        request.flash('error', "No message sent")
        response.redirect('/')
    } else {
        Message.create(request.body.message, function() {
            request.flash('success', "Thank you !")
            response.redirect('/')
        })
    }
})


// Launch app
app.listen(8080)
