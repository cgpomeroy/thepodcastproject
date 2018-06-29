const axios = require('axios');
const Feed = require('rss-to-json');

module.exports = (app) => {
    app.get('/api/test', (req, res) => {
        res.send("Test")
    });

    app.get('/api/podcast/:query', (req, res) => {
        var query = (req.params.query);
        Feed.load(query, function(err, rss){
           res.send(rss);
        });
    });
};