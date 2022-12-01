//import {sum as add,sub as subtract} from './cal';  //this way we can do the alias to call by the different name;
//import {sum as add,sub as subtract} from './cal';  
//we can also use to import the entire import

//import {Calculator} from './cal';  // this way also can do it.here cal it can be any things like c
import Calculator ,{Calculator1} from './calculator';

var cala=new Calculator();   //need to create the object of the imported class



console.log(cala.sum1(1,5));
console.log(cala.sub1(8,4));