const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var logger = require('morgan');
var silent = process.env.NODE_ENV === 'test';

const app = express();
var db;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.enable('verbose errors');

if (app.settings.env === 'production') app.disable('verbose errors');

silent || app.use(logger('dev'));

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

app.get('/chat', (req, res) => {
    res.render('chat');
});

app.get('/react', (req, res) => {
    res.render('react');
});

app.get('/new/:id',(req, res) => {
    console.log(req.query);
    res.render('new', {
        newId: req.params.id,
        title: 'Новость!!!'
    });
});

app.get('/forms', (req, res) => {
    /*db.collection('form').find().toArray(function (err, docs) {
        if (err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });*/
    res.render('forms');
});

app.post('/forms', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    console.log(req.body);

    var collection = db.collection('form');

    var form = {
        'email' : req.body.email,
        'descr' : req.body.descr
    };
    collection.insertOne(form, (err, res) => {
        if (err){
            console.log(err);
            return;
        }

        console.log(res.ops);
        db.close();
    });


    db.collection('form').insert(form, (req, res) => {
        if (err){
            console.log(err);
            res.sendStatus(500);
        }
        res.send(form);
    });

    res.redirect('forms');
});

app.get('/404', function(req, res, next){
    next();
});

app.get('/403', function(req, res, next){
    // trigger a 403 error
    var err = new Error('not allowed!');
    err.status = 403;
    next(err);
});

app.get('/500', function(req, res, next){
    // trigger a generic (500) error
    next(new Error('keyboard cat!'));
});

app.use(function(req, res, next){
    res.status(404);

    res.format({
        html: function () {
            res.render('404', { url: req.url })
        },
        json: function () {
            res.json({ error: 'Not found' })
        },
        default: function () {
            res.type('txt').send('Not found')
        }
    })
});

app.use(function(err, req, res, next){
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);
    res.render('500', { error: err });
});

MongoClient.connect('mongodb://127.0.0.1:27017/testdb', (err, db) => {
    if (err){
        console.log('Произошла ошибка подключения к MongoDB:');
        return console.log(err);
    }
    if (db){
        console.log('Соединение с MongoDB успешно установленно');
        app.listen(1488, '127.0.0.1', function(){
            console.log('Сервер: 127.0.0.1:1488 запущен...');
        });
        db.close();
    }
});