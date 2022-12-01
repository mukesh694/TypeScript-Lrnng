var num;
do {
    var answer = prompt("Please enter a number");
    num = parseInt(answer);
} while (isNaN(num));
alert(num % 2 === 0 ? "Even" : "Odd");
