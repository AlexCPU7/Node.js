var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
})

app.get('/test', function(req, res){
  res.render('test');
})

app.get('/new/:id', function(req, res){
  res.render('new', {
    newId: req.params.id,
    title: 'Новость!!!'
  });
});

app.listen(1488);

console.log('Сервер: 127.0.0.1:1488 запущен...');
