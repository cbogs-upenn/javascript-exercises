const reverseString = function(string) {

let newstring = "";

const splitstring = string.split("");
newstring = splitstring.reverse().join("");

return newstring;

};

// Do not edit below this line
module.exports = reverseString;
