// arguments
var co = require('co');
var read = require('./verboseread');

var names = co(function *(path){
  var a = yield read(path + 's1.js');
  var b = yield read(path + 's2.js');
  var c = yield read(path + 's3.js');
  return [a, b, c];
});

names('foo/', function(err, res){
  console.log(res);
});
