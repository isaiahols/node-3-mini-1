module.exports = function (req, res, next) {
    const sessions = {};
    let nextSessionId = 1;
    
    function createSession() {
        const newSession = {};
        req.session = newSession;
        sessions[nextSessionId] = newSession;
        res.senHeader('set-cookie','sessionId='+ nextSessionId);
        nextSessionId++;
    }

    if (req.headers.cookie) {
        const sessionId = req.headers.cookie.split('=')[1]
        if(session[sessionId]){
            req.session = sessions[sessionId];
            res.session
        }
    } else {
        // create session
        createSession();
    }
    next();
}