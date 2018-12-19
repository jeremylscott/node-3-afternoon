const users = require('../models/users')
let id = 1



login = (req,res,next) => {
 const user = users.find(user => user.username === req.body.username && user.password === req.body.password)
    if(user) {
        req.session.user.username = user.username
        res.status(200).json(req.session.user)
    }
    else {
        res.status(500).json('Unauthorized.')
    }
}

register = (req,res,next) => {
    users.push(id,req.body.username,req.body.password)
    id++
    req.session.user.username = req.body.username
    res.status(200).json(req.session.user)
}

signout = (req,res,next) => {
    req.session.destroy()
    res.status(200).json(req.session)
}

getUser = (req,res,next) => {
    res.status(200).json(req.session.user)
}


module.exports = {
    login,
    register,
    signout,
    getUser
}