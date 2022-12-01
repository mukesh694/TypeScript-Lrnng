"use strict";
exports.__esModule = true;
exports.Calculator1 = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.sum1 = function (n1, n2) {
        return n1 + n2;
    };
    Calculator.prototype.sub1 = function (n1, n2) {
        return n1 - n2;
    };
    return Calculator;
}());
exports["default"] = Calculator;
var Calculator1 = /** @class */ (function () {
    function Calculator1() {
    }
    Calculator1.prototype.sum1 = function (n1, n2) {
        return n1 + n2;
    };
    Calculator1.prototype.sub1 = function (n1, n2) {
        return n1 - n2;
    };
    return Calculator1;
}());
exports.Calculator1 = Calculator1;
//class level export :-- > simply declare class export and then import that class in which we want then 
//import { Calculator } from './calculator';
