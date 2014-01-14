// sync vs. async
function* wtf() {
  yield 'This';
  yield 'is';
  yield 'called';
  yield 'asyncronous';
  yield '!!!11!11!!1';
  yield '\\o/';
}

var x = wtf();

for (var i=0; i<6; i++) {
  setTimeout(function() {
    res = x.next();
    console.log(res.value);
  }, i * 1000);
}

