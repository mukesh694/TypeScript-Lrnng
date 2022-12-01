var Check = /** @class */ (function () {
    function Check() {
    }
    Check.ankName = "Bank of America";
    return Check;
}());
var chck = new Check();
chck.accNo;
Check.ankName = "BOA";
var chck2 = new Check();
chck.accNo;
console.log(Check.ankName);
