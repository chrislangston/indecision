const square = function(x){
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;    
// }

const squareArrow = x => x * x;

//console.log(square(8));

//console.log(squareArrow(9));

const multiplier = {
    numbers: [1,3,6,9],
    multipleBy: 2,
    multiply(){
        return this.numbers.map((theNumber) => this.multipleBy * theNumber);
    }
}

console.log(multiplier.multiply());