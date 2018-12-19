const swag = require('../models/swag')

add = (req,res,next) => {
    const index = req.session.user.cart.findIndex(swag => swag.id == req.query.id)

    if (index === -1) {
        console.log(req.query);
        const selectedSwag = swag.find(swag => swag.id == req.query.id)
        req.session.user.cart.push(selectedSwag)
        console.log(selectedSwag);
        // req.session.user.total += selectedSwag.price
    }
        res.status(200).json(req.session.user)
}

deleteIt = (req,res,next) => {
    const selectedSwag = swag.find(swag => swag.id === req.query.id)

    if (selectedSwag) {
        const i = req.session.user.cart.findIndex(swag => +swag.id === +req.query.id)
        req.session.user.cart.splice(i,1)
        req.session.user.total-= selectedSwag.price
    }
    res.status(200).json(req.session.user)
}

checkout = (req,res,next) => {
    req.session.user.cart = []
    req.session.user.total = 0
    res.status(200).json(req.session.user)
}



module.exports = {
    add,
    deleteIt,
    checkout
}