const express = require('express');
const session = require('express-session');
const cors = require('cors');

app = express();

app.use(cors());

app.use(
    session({
        secret: 'secret string',
        resave: false,
        saveUninitialized: true,
        cookie: { httpOnly: true }
    })
);

app.get('/express_backend', function(req, res) {
    if(!req.session.pageCountByCurrentUser)
        req.session.pageCountByCurrentUser = 0;
    req.session.pageCountByCurrentUser++;

    res.send({
        express: req.session.pageCountByCurrentUser
    })
});

app.listen(5000,() => {
    console.log(`App Started on PORT ${5000}`);
});