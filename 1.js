// basic generator
module.exports = function* basic(x) {
  console.log(1);
  yield x + 1;
  console.log(2);
  var y = yield null;
  console.log(3);
  return x + y;
}
