module.exports = function(file) {
  return function(fn) {
    console.log('-> ' + file);
    setTimeout(function() {
      console.log(file + '<-');
      fn(null, file);
    }, 1000);
  };
};
