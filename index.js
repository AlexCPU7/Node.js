var http = require('http');

var server = http.createServer(function(req, res){
  console.log('URl страницы: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/panel; charset=utf-8'});
  res.end('Привет мир!');
});

server.listen(1488, '127.0.0.1');
console.log('Сервер: 127.0.0.1:1488 запущен...');
