/* #подключаем свой модуль */
/*var counter = require('./things');

console.log(counter.num);
console.log(counter.array_counter([1, 2, 3, 4]));
console.log(counter.multiply(2, 4));
*/

/* #обработчик событий */
/*var events = require('events');

var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text){
  console.log(text);
});

myEmit.emit('some_event', 'Обработчик событий сработал');
*/

/* #util унаследуент обработчики событий */
/*var events = require('events');
var util = require('util');

var Cars = function(model){
  this.model = model;
}

util.inherits(Cars, events.EventEmitter);

var bmv = new Cars('BMW');
var audio = new Cars('Audio');
var volvo = new Cars('Volvo');

var arr = [bmv, audio, volvo];
arr.forEach(function(car){
  car.on('speed', function(text){
    console.log(`скорость автомобился ${text}`);
  })
});

bmv.emit('speed', '250 km');
volvo.emit('speed', '180 km');
*/

/* #чтение файла */
//var fs = require('fs');

//var file = fs.readFileSync('text.txt', 'utf8');                               //вывод текста в файле

/* синхронное чтение файла */
/*var file = fs.readFileSync('new_file.txt', 'utf8');
var new_tex_file = file +'\nНовая строка.';
fs.writeFileSync('new_file.txt', new_tex_file);*/                               //запись текста в файл
//console.log(file);

/* асинхронное чтение из файла */
/*fs.readFile('text.txt', 'utf8', function(err, date){
  console.log(date);
});
fs.writeFile('new_file.txt', 'новый текс в файле', function(err, date){});
console.log('test');*/

//fs.unlink('del.txt', function(){});                                             //кдалить файд

//fs.mkdirSync('new-dir');                                                        //создание папки

//fs.rmdirSync('new-dir');                                                        //удалить папку

/*fs.mkdir('new-dir', function(){
  fs.writeFile('./new-dir/new_file.txt', 'новый текс', function(){
    console.log('всё сработало');
  })
})*/

/*fs.unlink('./new-dir/new_file.txt', function(){
  fs.rmdir('new-dir', function(){});
});*/

/*var myReadShort = fs.createReadStream(__dirname + '/lot_text.txt', 'utf8');     //получает чусочки данных(потоки)
var myWriteShort = fs.createWriteStream(__dirname + '/new_lot_text.txt');*/

/*myReadShort.on('data', function(chunk){
  console.log('Новые данные полученны: \n' + chunk);
  myWriteShort.write(chunk)
});*/
//аналог pipe, будет то же самое
//myReadShort.pipe(myWriteShort);

//JSON.stringify(arr);                                                            //перевод массива в json
