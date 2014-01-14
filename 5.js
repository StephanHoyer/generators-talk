// intro co
var co = require('co');

var thunkedTimeout = function(time) {
  return function(fn) {
    setTimeout(fn, time);
  };
};

co(function* () {
  console.log('This');
  yield thunkedTimeout(1000);
  console.log('is');
  yield thunkedTimeout(1000);
  console.log('called');
  yield thunkedTimeout(1000);
  console.log('asyncronous');
  yield thunkedTimeout(1000);
  console.log('!!!11!11!!1');
  yield thunkedTimeout(1000);
  console.log('\\o/');
})();

