const swag = require('../models/swag')

search = (req,res,next) => {
    if (!req.query.category) {
        res.status(200).json(swag)
    }
    else {
        const filteredSwag = swag.filter(swag => swag.category == req.query.category)
        res.status(200).json(filteredSwag)
    }
}

module.exports = {
    search
}