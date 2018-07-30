const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const loadWeatherRoute = require('./weather');

const app = express();
app.use(bodyParser.json());

loadWeatherRoute(app);

app.get('/', (req, res) => res.send('Hello World!<br><h1>Hello Weather bot lol </h1>'))

app.post('/errors', function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
});


const port = config.PORT;
app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
});