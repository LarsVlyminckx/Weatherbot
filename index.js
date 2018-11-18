const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const loadWeatherRoute = require('./weather');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


loadWeatherRoute(app);

app.get('/', function(req, res){
    res.render('index');
});

app.post('/errors', function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
});


const port = config.PORT;
app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
});