var array_counter = function(array){
  return 'В массиве находится ' + array.length + ' элементов';
};

module.exports.print = function(){
  return 'print';
};

var multiply = function(x, y){
  return `${x} умножить ${y} равно ${x * y}`;
}

module.exports.num = 101;                       //1 спопоб экспорта

module.exports.array_counter = array_counter;   //2 способ экспорта

module.exports = {                              //3 спопоб экспорта
  array_counter: array_counter,
  multiply: multiply,
};
