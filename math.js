function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub };

// or you can write it shown below, it will directly export thre functions.

// exports.add = (a,b) => a+b;

// exports.sub = (a,b) => a-b;
