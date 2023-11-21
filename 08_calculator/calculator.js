const add = function(a, b) {
  return a+b;	
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(inputArray) {
  if (Array.isArray(inputArray)){
   const output = inputArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   return output;
  } else 
  {return 0;} 
};

const multiply = function(inputArray) {
  if (Array.isArray(inputArray)){
    const output = inputArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    return output;
   } else 
   {return 0;} 

};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(a) {
  let init = 1;
  while (a > 0){
    init *= a;
    a--;
  }

  return init;
	
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
