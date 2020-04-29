"use strict";

var square = function square(x) {
  return x * x;
}; // const squareArrow = (x) => {
//     return x * x;    
// }


var squareArrow = function squareArrow(x) {
  return x * x;
}; //console.log(square(8));
//console.log(squareArrow(9));


var multiplier = {
  numbers: [1, 3, 6, 9],
  multipleBy: 2,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (theNumber) {
      return _this.multipleBy * theNumber;
    });
  }
};
console.log(multiplier.multiply());