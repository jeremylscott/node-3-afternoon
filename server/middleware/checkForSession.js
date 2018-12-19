

checkForSession = (req,res,next) => {
    if(!req.session.user) {
            req.session.user = {
                username: '',
                cart: [],
                total: 0.00
            }
    }
    next()
}

module.exports = {
    checkForSession
}