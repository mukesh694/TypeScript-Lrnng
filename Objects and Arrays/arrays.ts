var courses:any=["Angular","ReactJs","ES6"];
courses.push("Security Course");
courses.push(25);

for(var i=0;i<courses.length;i++){
    console.log(courses[i]);
}

var y=courses[0];
var x=courses[1];


//de-structuring
var [a,b,c]=courses;
console.log(a);
console.log(b);
console.log(c);