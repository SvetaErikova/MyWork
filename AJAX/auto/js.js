function arrayFill(x, y) {
    var arr = [];
    for (var i = 1; i <= y; i++) {
        arr.push(x);
    };
    return arr;
}
console.log(arrayFill('x', 5));