const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const app = express();
var db;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* == pages == */
app.get('/', function(req, res){
  res.render('index', {date: new Date()});
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/test', function(req, res){
  res.render('test');
});

app.get('/chat', function (req, res) {
    res.render('chat');
});

app.get('/react', function (req, res) {
    res.render('react');
});

app.get('/new/:id', function(req, res){
    console.log(req.query);
    res.render('new', {
        newId: req.params.id,
        title: 'Новость!!!'
    });
});

app.get('/forms', function (req, res) {
    /*db.collection('form').find().toArray(function (err, docs) {
        if (err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });*/
    res.render('forms');
});

app.post('/forms', function(req, res){
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    var form = {
        'email' : req.body.email,
        'descr' : req.body.descr
    };
    db.collection('form').insert(form, (req, res) => {
        if (err){
            console.log(err);
            res.sendStatus(500);
        }
        res.send(form);
    });

    res.redirect('forms');
});

/*app.use( function(req, res){
    req.status(500);
    res.send(500);
});*/

mongoClient.connect('mongodb://127.0.0.1:27017', function (err, database) {
    if (err){
        console.log('Произошла ошибка подключения к MongoDB:');
        return console.log(err);
    }
    db = database;
    if (db){
        console.log('Соединение с MongoDB успешно установленно');
        app.listen(1488, '127.0.0.1', function(){
            console.log('Сервер: 127.0.0.1:1488 запущен...');
        });

    }
});