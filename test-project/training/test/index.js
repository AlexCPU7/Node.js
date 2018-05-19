//запускаем локальный сервер
var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('URl страницы: ' + req.url);
  if(req.url === ('index' && '/')){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);               //вывод страницы
  }else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});  
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
  }

  //var myReadShort = fs.createReadStream(__dirname + '/training/lot_text.txt', 'utf8');  /вывод текста

  //res.end('Привет мир!');
});

server.listen(1488, '127.0.0.1');
console.log('Сервер: 127.0.0.1:1488 запущен...');
