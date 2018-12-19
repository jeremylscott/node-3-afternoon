const express = require('express')
const {json} = require('body-parser')
const session = require('express-session')
require('dotenv').config()
const port = 3000
// Middleware
const {checkForSession} = require('./middleware/checkForSession')
// Controllers
const {read} = require('./controllers/swag_controller')
const {login,register,signout,getUser} = require('./controllers/auth_controller')
const {add,deleteIt,checkout} = require('./controllers/cart_controller')
const {search} = require('./controllers/search_controller')

const app = express()
app.use(json())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(checkForSession)
// app.use(express.static(`${node-3-afternoon}/../build`))

// Swag
app.get('api/swag', read)

// Auth
app.post('/api/login', login)
app.post('/api/register', register)
app.post('/api/signout', signout)
app.get('/api/user', getUser)

// Cart
app.post('/api/cart', add)
app.post('/api/cart/checkout', checkout)
app.delete('/api/cart', deleteIt)

// Search
app.get('/api/search', search)







app.listen(port, () => console.log(`Server listening on port: ${port}`))