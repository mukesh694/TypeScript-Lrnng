var num: number;

do{
var numberEnt: string = prompt("Please enter a number");
num = parseInt(numberEnt);
}while(isNaN(num))

alert(num % 2 === 0 ? "Even" : "Odd" )