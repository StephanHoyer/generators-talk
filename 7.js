// merging
var co = require('co');
var read = require('./verboseread');

var names = co(function *(){
  var a = yield read('s1.js');
  var b = yield read('s2.js');
  var c = yield read('s3.js');
  return [a, b, c];
});

var names2 = co(function *(){
  var a = read('p5.js');
  var b = read('p6.js');
  var c = read('p7.js');

  return yield [a, b, c];
});

var names3 = co(function *(){
  return yield([names, names2]);
});

names3(function(err, res){
  console.log(res);
});
