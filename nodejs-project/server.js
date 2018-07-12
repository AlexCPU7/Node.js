const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const logger = require('morgan');
const silent = process.env.NODE_ENV === 'test';

const app = express();
const db1 = require('./utils/DataBaseUtils');
db1.setUpConnection();

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

app.get('/notes', (req, res) => {
    db1.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db1.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db1.deleteNote(req.param.id).then(data => res.send(data));
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

    const collection = db.collection('form');

    const form = {
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
    const err = new Error('not allowed!');
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

app.listen(1488, '127.0.0.1', function(){
    console.log('Сервер: 127.0.0.1:1488 запущен...');
});

/*MongoClient.connect('mongodb://127.0.0.1:27017/testdb', (err, db) => {
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
});*/