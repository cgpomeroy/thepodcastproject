const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/dev');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 7 * 24 * 3600,
        keys: [keys.cookieKey]
    })
);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/podRoutes')(app);

app.get('/', (req, res) => {
    res.send({Portland: "Timbers"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);