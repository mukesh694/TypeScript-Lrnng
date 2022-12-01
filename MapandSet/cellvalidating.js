var cell = "6171238760";
var re = /[0-9]{10}/;
if (cell.match(re)) {
    console.log("cell is valid");
}
else {
    console.log("cell is  Invalid" + cell);
}
