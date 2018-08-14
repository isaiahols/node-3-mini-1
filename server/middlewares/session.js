module.exports = function (req, res, next) {
    if (!req.session.user) {
        req.session.user = {
            messages: []
        }
        // console.log(req.sesison.user.messages);
    }

    next();
}