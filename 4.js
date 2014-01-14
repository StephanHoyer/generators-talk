// intro suspend
var suspend = require('suspend');
var resume = suspend.resume;

suspend(function* () {
  console.log('This');
  yield setTimeout(resume(), 1000);
  console.log('is');
  yield setTimeout(resume(), 1000);
  console.log('called');
  yield setTimeout(resume(), 1000);
  console.log('asyncronous');
  yield setTimeout(resume(), 1000);
  console.log('!!!11!11!!1');
  yield setTimeout(resume(), 1000);
  console.log('\\o/');
})();

