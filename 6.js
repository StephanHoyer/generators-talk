// paralell vs. sequential
var co = require('co');

var read = function(file) {
  return function(fn) {
    console.log('start file read ' + file);
    setTimeout(function() {
      console.log('finish file read ' + file);
      fn(null, file);
    }, 1000);
  };
};

var names = co(function *(){
  var a = yield read('s1.js');
  var b = yield read('s2.js');
  var c = yield read('s3.js');
  return [a, b, c];
});

names(function(err, res){
  console.log(res);
});

// parallel

var names2 = co(function *(){
  var a = read('p5.js');
  var b = read('p6.js');
  var c = read('p7.js');

  return yield [a, b, c];
})

names2(function(err, res){
  console.log(res);
});
