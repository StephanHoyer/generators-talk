// basic loop
module.exports = function* loop(x) {
  do {
    console.log(x);
    y = yield x++;
  } while (!y)
  return x;
}
