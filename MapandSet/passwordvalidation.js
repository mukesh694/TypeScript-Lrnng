var password = "ts124er";
var regExp = /(?=.*[A-Z]) \w{4,10}/;
if (password.match(regExp)) {
    console.log("valid password");
}
else {
    console.log("invalid password" + password);
}
