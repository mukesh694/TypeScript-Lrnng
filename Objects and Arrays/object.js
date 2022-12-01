//how to create the object in typescript.
var student = {
    firstName: "John",
    lastName: "Dopp",
    score: 90
};
console.log(student.firstName);
console.log(student.score);
//for look in the object
for (var item in student) {
    console.log(item);
    console.log(student[item]);
}
//de-structuring the object
//keep  name same as given in the property of the object
var firstName = student.firstName, lastName = student.lastName;
console.log(firstName);
console.log(lastName);
