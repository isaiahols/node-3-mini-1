module.exports = function (req, res, next) {
    const sessions = {};
    let nextSessionId = 1;

    function createSession() {
        const newSession = {};
        req.session = newSession;
        sessions[nextSessionId] = newSession;
        res.setHeader('set-cookie', 'sessionId=' + nextSessionId);
        nextSessionId++;
    }

    if (req.headers.cookie) {
        const sessionId = req.headers.cookie.split('=')[1]
        if (sessions[sessionId]) {
            req.session = sessions[sessionId];
            res.setHeader('set-cookie', 'sessionId=' + SessionId)
        } else {
            createSession()
        }
    } else {
        // create session
        createSession();
    }
    next();
}