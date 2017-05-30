function add(a, b) {
  return (a + b);
}

var c = 2000;
var d = 33;
var that = this;

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(4, 67));
console.log(addStatement(2200, 33));
console.log(addStatement(112200, 33));
