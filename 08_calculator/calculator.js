const add = function(a, b) {
	return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(inputArray) {
  const total = inputArray.reduce((sum, current) => {
    return sum + current
  }, 0) 
	return total;
};

const multiply = function(inputArray) {
 const total = inputArray.reduce((multiply, current) => {
  return multiply * current;
 })
 return total;
};

const power = function(a, b) {
	return a**b
};

const factorial = function(numberToCalc) {
  if (numberToCalc <= 0) {
    return 1
  }
  let answer = 1
  for (let x = 1; x <= numberToCalc; x++){
    answer = answer * x
  }
  return answer

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
