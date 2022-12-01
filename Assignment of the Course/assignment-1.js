var n1 = 20;
var n2 = 3.14;
var st = "Success is the revenge";
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 0] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 1] = "Tuesday";
    WeekDay[WeekDay["Thursday"] = 2] = "Thursday";
    WeekDay[WeekDay["Friday"] = 3] = "Friday";
    WeekDay[WeekDay["Saturday"] = 4] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 5] = "Sunday";
})(WeekDay || (WeekDay = {}));
console.log(n1);
console.log(n2);
console.log(st);
console.log(WeekDay);
