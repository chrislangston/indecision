console.log('util file');

const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x
}

const subtract = (x,y) => {
    return x - y;
}
export {
    square,
    add,
    subtract as default
};