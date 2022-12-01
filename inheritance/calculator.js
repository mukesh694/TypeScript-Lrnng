var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.sum = function (n1, n2) {
        return n1 + n2;
    };
    Calculator.sub = function (n1, n2) {
        return n1 - n2;
    };
    return Calculator;
}());
console.log(Calculator.sum(25, 25));
console.log(Calculator.sub(200, 25));
