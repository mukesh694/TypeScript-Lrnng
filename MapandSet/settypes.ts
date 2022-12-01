let courses=new Set();
courses.add("Angular");
courses.add("Java");
courses.add("React");
courses.add("Node");

console.log(courses.size);
console.log(courses.values());

courses.forEach(function(course){
    console.log(course);
})
