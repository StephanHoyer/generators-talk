// objects and arrays
var co = require('co');
var fs = require('fs');
var read = require('./verboseread');

var names = co(function *(){
  return {
    a: yield read('A'),
    b: yield [read('B1'), read('B2')],
    c: yield {x: read('CX'), y: read('CY')}
  }
});

names('foo/', function(err, res){
  console.log(res);
});
