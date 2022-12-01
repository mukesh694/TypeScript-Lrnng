var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
;
console.log(Gender.FEMALE);
console.log(Gender.MALE);
console.log(Gender[0]);
console.log(Gender[1]);
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
console.log(WeekDays[6]);
console.log(WeekDays[7]);
