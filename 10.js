// exceptions
var co = require('co');

nodeStyle = function() {
  return function(fn) {
    fn('EXPLODE!');
  }
}

exceptionStyle = function() {
  throw('BAM!');
}

var test = co(function *(){
  yield exceptionStyle();
  yield nodeStyle();
});

test('foo/', function(err, res){
  console.log(err);
});
