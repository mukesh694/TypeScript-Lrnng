"use strict";
//import {sum as add,sub as subtract} from './cal';  //this way we can do the alias to call by the different name;
//import {sum as add,sub as subtract} from './cal';  
//we can also use to import the entire import
exports.__esModule = true;
//import {Calculator} from './cal';  // this way also can do it.here cal it can be any things like c
var calculator_1 = require("./calculator");
var cala = new calculator_1["default"](); //need to create the object of the imported class
console.log(cala.sum1(1, 5));
console.log(cala.sub1(8, 4));
