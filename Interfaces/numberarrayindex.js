var studentName = ["Ram", "Shyam", "Rahul"];
var studentScore = {}; //it will like object
studentScore["Ram"] = 100;
studentScore["Shayam"] = 500;
studentScore["Rahul"] = 300;
for (var item in studentScore) {
    console.log(studentScore[item]);
}
