const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

/*const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});*/

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.listen(1488, '127.0.0.1', () => {
    console.log('Сервер: 127.0.0.1:1488 запущен...');
});

/* == pages == */
app.get('/', (req, res) => {
  res.render('index', {date: new Date()});
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/test', (req, res) => {
  res.render('test');
});

app.get('/chat', function (req, res) {
    res.render('chat');
});

app.post('/chat', urlencodedParser, (req, res) => {
    res.render('chat');
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('chat');
});

app.get('/new/:id', function(req, res){
    console.log(req.query);
    res.render('new', {
        newId: req.params.id,
        title: 'Новость!!!'
    });
});

